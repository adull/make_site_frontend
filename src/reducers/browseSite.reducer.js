import { browseSiteConstants } from '../constants';

export function browseSite(state = {}, action) {
  switch(action.type) {
    case browseSiteConstants.GETFEATUREDSITES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case browseSiteConstants.GETFEATUREDSITES_SUCCESS:
    // console.log(action)
      return {
        ...state,
        featuredSites: action.pages,
        loading: false
      }
    case browseSiteConstants.GETFEATUREDSITES_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case browseSiteConstants.GETALLSITES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case browseSiteConstants.GETALLSITES_SUCCESS:
      // console.log(action)
      return {
        ...state,
        allSites: action.pages,
        loading: false
      }
    case browseSiteConstants.GETALLSITES_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
