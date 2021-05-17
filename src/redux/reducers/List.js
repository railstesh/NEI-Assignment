import { ListInitialStates } from '../states';
import { handleActions } from 'redux-actions';

import { ListActions } from '../actions';

export const ListReducer = handleActions(
  {
    [ListActions.REQUEST_LIST]: (state = ListInitialStates, action) => ({
      ...state,
      isLoading: true,
      lists: [],
    }),
    [ListActions.LIST_FETCHED_SUCCESS]: (
      state = ListInitialStates,
      action
    ) => ({
      ...state,
      isLoading: false,
      lists: action.payload.lists,
    }),
    [ListActions.LIST_FETCHED_FAILED]: (state = ListInitialStates, action) => ({
      ...state,
      isLoading: false,
      lists: [],
    }),
  },
  ListInitialStates
);
