import { createLogic } from 'redux-logic';
import { push } from 'react-router-redux';

import { ListLogics } from './List';

export const redirectToLogic = createLogic({
  type: 'REDIRECT_TO',
  async process(data, dispatch, done) {
    const action = data.action;
    dispatch(push(action.payload.path));
    done();
  },
});

export const AllLogics = [...ListLogics, redirectToLogic];
