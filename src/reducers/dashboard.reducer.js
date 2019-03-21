import { dashboardConstants } from '../constants';

const initialState = {
  showAddPageModal: false,
  showDeletePageModal: false
}

export function dashboard(state = initialState, action) {
  switch(action.type) {
    case dashboardConstants.GETPAGES_REQUEST:
      return {
        ...state,
        loading: true
      };
    case dashboardConstants.GETPAGES_SUCCESS:
      // console.log(action);
      return {
        ...state,
        items: action.pageData
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
        items: action.pageData,
        showAddPageModal: false
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
      console.log(action)
      return {
        ...state,
        loading: false,
        items: action.pageData,
        showDeletePageModal: false

      };
    case dashboardConstants.DELETEPAGE_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case dashboardConstants.TOGGLE_ADD_PAGE_MODAL:
      return {
        ...state,
        showAddPageModal: !state.showAddPageModal
      }
    case dashboardConstants.TOGGLE_DELETE_PAGE_MODAL:
      return {
        ...state,
        showDeletePageModal: !state.showDeletePageModal
      }
    default:
      return state;
  }
}
