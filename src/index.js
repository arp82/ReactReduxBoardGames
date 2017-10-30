import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import reducers from './reducers';
import BoardGame from './containers/board-game';
import NewBoardGame from './containers/new-board-game';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/newBoardGame" component={NewBoardGame} />
          <Route path="/boardGame/:id" component={BoardGame} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
