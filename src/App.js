import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import configureStore from './redux/store';

import './App.css';

const List = React.lazy(() => import('./components/List'));

const history = createBrowserHistory();
const store = configureStore(history);

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Suspense fallback={'...Loading'}>
          <Switch>
            <Route
              exact
              path={'/'}
              name="List"
              render={(props) => <List {...props} />}
            />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
