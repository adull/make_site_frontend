import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { dashboard } from './dashboard.reducer';
import { editSite } from './editSite.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';


const rootReducer = combineReducers({
  alert,
  authentication,
  dashboard,
  editSite,
  registration,
  users,

});

export default rootReducer;
