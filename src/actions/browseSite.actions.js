import { browseSiteConstants } from '../constants';

import { alertActions } from './';
import { browseSiteService } from '../services';

export const browseSiteActions = {
  getFeaturedPages,
  getAllPages
}

function getFeaturedPages() {
  return dispatch => {
    dispatch(request());

    browseSiteService.getFeaturedPages()
      .then(
        featuredPages => {
          dispatch(success(featuredPages));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: browseSiteConstants.GETFEATUREDSITES_REQUEST }}
  function success(featuredPages) { return { type: browseSiteConstants.GETFEATUREDSITES_SUCCESS, pages: featuredPages.pages }}
  function failure(error) { return { type: browseSiteConstants.GETFEATUREDSITES_FAILURE, error }}
}

function getAllPages() {
  return dispatch => {
    dispatch(request());

    browseSiteService.getAllPages()
      .then(
        allPages => {
          dispatch(success(allPages));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: browseSiteConstants.GETALLSITES_REQUEST }}
  function success(allPages) { return { type: browseSiteConstants.GETALLSITES_SUCCESS, pages: allPages.pages }}
  function failure(error) { return { type: browseSiteConstants.GETALLSITES_FAILURE, error }}
}
