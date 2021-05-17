import { combineReducers } from 'redux';
import { ListReducer } from './List';

export const RootReducer = combineReducers({
  listReducer: ListReducer,
});
