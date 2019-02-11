import { userConstants } from '../constants'

import { alertActions } from './';
import { userService } from '../services'
import { history } from '../helpers'

export const userActions = {
  login,
  logout,
  register,
  getAll
}

function login(username, password) {
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then (
        user => {
          dispatch(success(user));
          history.push('/dashboard');
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }

  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }

  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT}
}

function register(username, password) {
  return dispatch => {
    dispatch(request(username));

    userService.register(username, password)
      .then (
        username => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success("Succesfully registered"));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, username }}
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, username }}
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error }}
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then (
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      )
  }

  function request() { return { type: userConstants.GETALL_REQUEST }}
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users }}
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error }}
}
