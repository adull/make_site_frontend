import { editSiteConstants } from '../constants';

import { alertActions } from './';
import { editSiteService } from '../services';
// import { history } from '../helpers';

export const editSiteActions = {
  addSection,
  editSection,
  getStyle
}

function addSection(sectionData) {
  return dispatch => {
    dispatch(request(sectionData));

    editSiteService.addSection(sectionData)
      .then (
        edit => {
          dispatch(success());
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
  }

  function request(sectionData) { return { type: editSiteConstants.ADDSECTION_REQUEST, sectionData }};
  function success(sectionData) { return { type: editSiteConstants.ADDSECTION_SUCCESS, sectionData }};
  function failure(error) { return { type: editSiteConstants.ADDSECTION_FAILURE, error }};
}

function editSection(editData) {
  return dispatch => {
    dispatch(request(editData));

    editSiteService.editSection(editData)
      .then (
        edit => {
          dispatch(success());
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
  }

  function request(editData) { return { type: editSiteConstants.EDITSECTION_REQUEST, editData }};
  function success(editData) { return { type: editSiteConstants.EDITSECTION_SUCCESS, editData }};
  function failure(error) { return { type: editSiteConstants.EDITSECTION_FAILURE, error }};

}

function getStyle(siteURL) {
  return dispatch => {
    dispatch(request());

    editSiteService.getStyle(siteURL)
    .then (
      style => {
        dispatch(success(style));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    )
  }

  function request() { return { type: editSiteConstants.GETSTYLE_REQUEST }};
  function success(style) { return { type: editSiteConstants.GETSTYLE_SUCCESS, style }};
  function failure(error) { return { type: editSiteConstants.GETSTYLE_FAILURE, error }};

}