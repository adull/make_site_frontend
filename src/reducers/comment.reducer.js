import { commentConstants } from '../constants';

export const commentSiteConstants = {
    NEWCOMMENT_REQUEST: 'NEWCOMMENT_REQUEST',
    NEWCOMMENT_SUCCESS: 'NEWCOMMENT_SUCCESS',
    NEWCOMMENT_FAILURE: 'NEWCOMMENT_FAILURE',

    GETCOMMENTS_REQUEST: 'GETCOMMENTS_REQUEST',
    GETCOMMENTS_SUCCESS: 'GETCOMMENTS_SUCCESS',
    GETCOMMENTS_FAILURE: 'GETCOMMENTS_FAILURE',

    DELETECOMMENT_REQUEST: 'DELETECOMMENT_REQUEST',
    DELETECOMMENT_SUCCESS: 'DELETECOMMENT_SUCCESS',
    DELETECOMMENT_FAILURE: 'DELETECOMMENT_FAILURE',
};


export function comment(state = {loading: true, comments: []}, action) {
  switch(action.type) {
    case commentConstants.NEWCOMMENT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case commentConstants.NEWCOMMENT_SUCCESS:
      return {
        ...state,
        comments: action.newCommentData,
        loading: false
      }
    case commentConstants.NEWCOMMENT_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case commentConstants.GETCOMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case commentConstants.GETCOMMENTS_SUCCESS:
    console.log("im here in the reducer")
    console.log(action)
      return {
        ...state,
        comments: action.comments.comments,
        loading: false
      }
    case commentConstants.GETCOMMENTS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case commentConstants.DELETECOMMENT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case commentConstants.DELETECOMMENT_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        loading: false
      }
    case commentConstants.DELETECOMMENT_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
