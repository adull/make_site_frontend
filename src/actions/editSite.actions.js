import { editSiteConstants } from '../constants';

import { alertActions } from './';
import { editSiteService } from '../services';
// import { history } from '../helpers';

export const editSiteActions = {
  addSection,
  addImageSection,
  deleteSection,
  editSection,
  getStyle,
  updateSiteBackground,
  updateView
}

function addSection(siteURL, style) {
  console.log("in actions - add regular section")
  // console.log(style);
  return dispatch => {
    dispatch(request(siteURL, style));

    editSiteService.addSection(siteURL, style)
      .then (
        addedData => {
          dispatch(success(addedData));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      )
  }

  function request(siteURL, style) { return { type: editSiteConstants.ADDSECTION_REQUEST, siteURL, style }};
  function success(sectionData) { return { type: editSiteConstants.ADDSECTION_SUCCESS, sectionData }};
  function failure(error) { return { type: editSiteConstants.ADDSECTION_FAILURE, error }};
}

function addImageSection(siteURL, hash, image, style) {
  console.log(style);
  console.log("in actions - add image section")
  return dispatch => {
    console.log("style")
    console.log(style);
    dispatch(request(siteURL, hash, image, style));

    editSiteService.addImageSection(siteURL, hash, image, style)
    .then(
      addedData => {
        dispatch(success(addedData));
      },
      error => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    )
  }

  function request(siteURL, hash, image, style) { return {type: editSiteConstants.ADDIMAGESECTION_REQUEST, siteURL, hash, image, style }};
  function success(sectionData) { return { type: editSiteConstants.ADDIMAGESECTION_SUCCESS, sectionData }};
  function failure(error) { return { type: editSiteConstants.ADDIMAGESECTION_FAILURE, error }};
}

function deleteSection(siteURL, sectionIndex) {
  return dispatch => {
    dispatch(request(siteURL, sectionIndex));

    editSiteService.deleteSection(siteURL, sectionIndex)
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
  function request(siteURL, sectionIndex) { return { type: editSiteConstants.DELETSECTION_REQUEST, siteURL, sectionIndex }};
  function success(sectionData) { return { type: editSiteConstants.DELETESECTION_SUCCESS, sectionData }};
  function failure(error) { return { type: editSiteConstants.DELETESECTION_FAILURE, error }};
}

function editSection(siteURL, editData) {
  return dispatch => {

    dispatch(request(editData));
    // console.log(editData);
    editSiteService.editSection(siteURL, editData)
      .then (
        edit => {
          console.log(editData);
          dispatch(success(editData));
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

function updateSiteBackground(backgroundJSON) {
  return dispatch => {
    dispatch(updateSiteBackground(backgroundJSON));
  }

  function updateSiteBackground(backgroundJSON) {
    return { type: editSiteConstants.UPDATESTYLE, style: backgroundJSON };
  }
}

function updateView(view, index) {
  return dispatch => {
    dispatch(updateView(view, index));
  }

  function updateView(view, index) {
    return { type: editSiteConstants.UPDATEVIEWARRAY, view: view, index: index };
  }
}
