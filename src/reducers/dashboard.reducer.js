import { dashboardConstants } from '../constants'

export function dashboard(state = {}, action) {
  switch(action.type) {
    case dashboardConstants.GETPAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GETPAGES_SUCCESS:
      return {
        ...state,
        items: action.userPages.results
      };
    case dashboardConstants.GETPAGES_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case dashboardConstants.NEWPAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.NEWPAGE_SUCCESS:
      return {
        ...state,
        pageData: action.pageData
      }
    case dashboardConstants.NEWPAGE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case dashboardConstants.DELETEPAGE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.DELETEPAGE_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case dashboardConstants.DELETEPAGE_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
