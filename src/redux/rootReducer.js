import {combineReducers} from 'redux';
import user from './user/reducer';
import product from './product/reducer';
import color from './color/reducer';
import message from './contactus/reducer';

const rootReducer = combineReducers({
  user,
  product,
  color,
  message
});

export default rootReducer;