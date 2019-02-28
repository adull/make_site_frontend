import { editSiteConstants } from '../constants';

export function editSite(state = {}, action) {
  switch(action.type) {
    case editSiteConstants.ADDSECTION_REQUEST :
      return {
        ...state,
      };
    case editSiteConstants.ADDSECTION_SUCCESS :
      return {
        ...state,
      };
    case editSiteConstants.ADDSECTION_FAILURE :
      return {
        ...state,
      };
    case editSiteConstants.EDITSECTION_REQUEST :
      return {
        ...state,
      };
    case editSiteConstants.EDITSECTION_SUCCESS :
      return {
        ...state,
      };
    case editSiteConstants.EDITSECTION_FAILURE :
      return {
        ...state,
      };
    case editSiteConstants.GETSTYLE_REQUEST :
      return {
        ...state,
        loading: true
      }
    case editSiteConstants.GETSTYLE_SUCCESS :
      return {
        ...state,
        style: action.style,
        loading: false
      }
    case editSiteConstants.GETSTYLE_FAILURE :
      return {
      }
    case editSiteConstants.UPDATESTYLE:
      return {
        ...state,
        style: action.style
      }
    default:
      return state;
  }
}
