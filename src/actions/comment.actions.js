import { commentConstants } from '../constants'

import { alertActions } from './';
import { commentService } from '../services';
// import { history } from '../helpers';

export const commentActions = {
  newComment,
  getComments,
  deleteComments
}

function newComment(newCommentData) {
  return dispatch => {
    dispatch(request());

    commentService.newComment(newCommentData)
    .then(newComment => {
      dispatch(success(newComment));
      dispatch(alertActions.success("Comment succesfully commented."))

      // getComments();
    },
    error => {
      dispatch(failure(error.toString()));
      dispatch(alertActions.error(error.toString()));
    })
  }

  function request() { return { type: commentConstants.NEWCOMMENT_REQUEST }}
  function success(newCommentData) { return { type: commentConstants.NEWCOMMENT_SUCCESS, newCommentData }}
  function failure(error) { return { type: commentConstants.NEWCOMMENT_FAILURE, error }}
}

function getComments(url) {
  return dispatch => {
    dispatch(request())

    commentService.getComments(url)
    .then(comments => {
      dispatch(success(comments));
    },
    error => {
      dispatch(failure(error.toString()));
    })
  }

  function request() { return { type: commentConstants.GETCOMMENTS_REQUEST }}
  function success(comments) { return { type: commentConstants.GETCOMMENTS_SUCCESS, comments }}
  function failure(error) { return { type: commentConstants.GETCOMMENTS_FAILURE, error }}
}

function deleteComments(commentID) {
  return dispatch => {
    dispatch(request())

    commentService.deleteComments(commentID)
    .then(newCommentsAfterDeletion => {
      dispatch(success(newCommentsAfterDeletion));
    },
    error => {
      dispatch(failure(error.toString()));
    })
  }

  function request() { return { type: commentConstants.DELETECONTENT_REQUEST }}
  function success(comments) { return { type: commentConstants.DELETECONTENT_SUCCESS }}
  function failure(error) { return { type: commentConstants.DELETECONTENT_FAILURE }}
}
