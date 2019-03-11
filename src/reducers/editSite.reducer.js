import { editSiteConstants } from '../constants';

let initialState = {
  viewArr: []
}

export function editSite(state = initialState, action) {
  switch(action.type) {
    case editSiteConstants.EDITORSTATE_CHANGE :
      let newViewArr = viewArr
      newViewArr[action.index] = action.editorState;
      return {
        ...state,
        viewArr: newViewArr
      }
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
    case editSiteConstants.UPDATEVIEWARRAY:
      newViewArr = state.viewArr;
      newViewArr[action.index] = action.view;
      return {
        ...state,
        // editorState: action.editorState
        viewArr: newViewArr
      }
    case editSiteConstants.EDITSECTION_REQUEST :
      return {
        ...state,
      };
    case editSiteConstants.EDITSECTION_SUCCESS :
      // console.log(JSON.stringify(action.editData));

      let getStyle = {
        getStyle: JSON.stringify(action.editData)
      };
      let editSuccessJSON = {
        success: true,
        results: getStyle
      }
      return {
        ...state,
        style: editSuccessJSON
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
      let jsonStyle = JSON.parse(action.style.results.getStyle)
      let sections = jsonStyle.sections;
      let viewArr = [];
      for(var i = 0; i < sections.length; i ++) {
        viewArr.push('view');
      }
      console.log(action.style)
      return {
        ...state,
        style: action.style,
        loading: false,
        viewArr: viewArr
      }
    case editSiteConstants.GETSTYLE_FAILURE :
      return {
      }
    case editSiteConstants.UPDATESTYLE:
      console.log("updatestyle")
      return {
        ...state,
        style: action.style
      }
    default:
      return state;
  }
}
