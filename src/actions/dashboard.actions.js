import { dashboardConstants } from '../constants'

import { alertActions } from './';
import { dashboardService } from '../services';
// import { history } from '../helpers';

export const dashboardActions = {
  newPage,
  getPages,
  deletePage,
  toggleAddPageModal,
  toggleDeletePageModal
}

function newPage(newPageData) {
  return dispatch => {
    dispatch(request({ newPageData }));

    dashboardService.newPage(newPageData)
      .then (
        newPage => {
          dispatch(success(newPage));
          dispatch(alertActions.success("New page succesfully added."))

          // push to history
          console.log("ok now push to history")
          getPages();
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: dashboardConstants.NEWPAGE_REQUEST }}
  function success(newPageData) { console.log(newPageData); return { type: dashboardConstants.NEWPAGE_SUCCESS, pageData: newPageData.pages }}
  function failure(error) { return { type: dashboardConstants.NEWPAGE_FAILURE, error}}
}

function getPages() {
  // console.log("action - get pages")
  return dispatch => {
    dispatch(request());

    dashboardService.getPages()
      .then (
        pages => {
          // console.log(pages);
          dispatch(success(pages))
          // push to history
          // console.log("ok now push to history")
        },
        error => {
          console.log("error occuring here")
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: dashboardConstants.GETPAGES_REQUEST }}
  function success(userPages) { return { type: dashboardConstants.GETPAGES_SUCCESS, pageData: userPages.results.getPages }}
  function failure(error) { return { type: dashboardConstants.GETPAGES_FAILURE, error }}
}

function deletePage(page) {
  console.log("delete page")
  return dispatch => {
    // console.log("hello")
    dispatch(request());
    dashboardService.deletePage(page)
      .then (
        page => {
          console.log(page)
          // console.log("success")

          dispatch(success(page))
          dispatch(alertActions.success("Page succesfully deleted."))
          console.log("ok now push to history")
          getPages();
        },
        error => {
          console.log(error);
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };

  function request() { return { type: dashboardConstants.DELETEPAGE_REQUEST }}
  function success(page) { console.log(page); return { type: dashboardConstants.DELETEPAGE_SUCCESS, pageData: page.pages }}
  function failure(error) { return { type: dashboardConstants.DELETEPAGE_FAILURE, error }}
}

function toggleAddPageModal() {

  return dispatch => {
    dispatch(alertActions.success(""))

    dispatch({
      type: dashboardConstants.TOGGLE_ADD_PAGE_MODAL
    })
  }
}

function toggleDeletePageModal() {
  return dispatch => {
    dispatch(alertActions.success(""))

    dispatch({
      type: dashboardConstants.TOGGLE_DELETE_PAGE_MODAL
    })
  }
}
