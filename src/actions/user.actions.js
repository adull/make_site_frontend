import { userConstants } from '../constants';

import { alertActions } from './';
import { userService } from '../services';
import { history } from '../helpers';

export const userActions = {
  login,
  logout,
  register,
  getAll
}

function login(loginData) {
  return dispatch => {
    dispatch(request({ loginData }));

    userService.login(loginData)
      .then (
        user => {
          dispatch(success(loginData));
          history.push(`${process.env.PUBLIC_URL}/dashboard`);
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

function register(user) {
  return dispatch => {
    console.log("before calling dispatch request")
    dispatch(request(user));
    console.log("after calling dispatch request")


    userService.register(user)
      .then (user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success("Succesfully registered"));
        },
        error => {
          console.log("failure")
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  }

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user }}
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user }}
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
