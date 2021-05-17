import { createAction } from 'redux-actions';

export const ListActions = {
  // List fetching actions
  REQUEST_LIST: 'Request list!',
  LIST_FETCHED_SUCCESS: 'List fetched successfully',
  LIST_FETCHED_FAILED: 'List fetching failed',
};

export const requestList = createAction(ListActions.REQUEST_LIST);
export const listSuccess = createAction(ListActions.LIST_FETCHED_SUCCESS);
export const listFailed = createAction(ListActions.LIST_FETCHED_FAILED);
