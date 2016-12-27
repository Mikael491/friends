import { combineReducers } from 'redux';
import FriendReducer from './FriendReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  friends: FriendReducer,
  selectedFriendId: SelectionReducer
});
