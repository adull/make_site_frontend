import { dashboardConstants } from '../constants'

import { alertActions } from './';
import { dashboardService } from '../services';
import { history } from '../helpers';

export const dashboardActions = {
  newPage,
  getPages,
  deletePage
}

function newPage(newPageData) {
  return dispatch => {
    dispatch(request({ newPageData }));

    dashboardService.newPage(newPageData)
      .then (
        newPage => {
          dispatch(success(newPageData));
          // push to history
          console.log("ok now push to history")
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: dashboardConstants.NEWPAGE_REQUEST }}
  function success(newPageData) { return { type: dashboardConstants.NEWPAGE_SUCCESS, newPageData }}
  function failure(error) { return { type: dashboardConstants.NEWPAGE_FAILURE, error}}
}

function getPages() {
  return dispatch => {
    dispatch(request());

    dashboardService.getPages()
      .then (
        pages => {
          dispatch(success(pages))
          // push to history
          // console.log("ok now push to history")
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: dashboardConstants.GETPAGES_REQUEST }}
  function success(userPages) { return { type: dashboardConstants.GETPAGES_SUCCESS, userPages }}
  function failure(error) { return { type: dashboardConstants.GETPAGES_FAILURE, error }}
}

function deletePage(page) {
  return dispatch => {
    dispatch(request());
    dashboardService.deletePage(page)
      .then (
        page => {
          dispatch(success(page))
          // push to history
          console.log("ok now push to history")
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: dashboardConstants.DELETEPAGE_REQUEST }}
  function success(page) { return { type: dashboardConstants.DELETEPAGE_SUCCESS, page }}
  function failure(error) { return { type: dashboardConstants.DELETEPAGE_FAILURE, error }}
}
