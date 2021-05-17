import { createLogic } from 'redux-logic';

import { ListActions, listFailed, listSuccess } from '../actions/List';

const RequestListLogic = createLogic({
  type: ListActions.REQUEST_LIST,
  async process(data, dispatch, done) {
    const { action } = data;

    // set the data into localStorage
    localStorage.setItem('listData', JSON.stringify(action.payload));

    // getting the data from localStorage
    const result = JSON.parse(localStorage.getItem('listData'));

    if (result) {
      // if Found
      dispatch(
        listSuccess({
          lists: result,
        })
      );
    } else {
      // if not found
      dispatch(listFailed());
    }
    done();
  },
});

export const ListLogics = [RequestListLogic];
