import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import TodoList from './views/TodoList';
import Todo from './views/Todo';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path='/' component={TodoList} />
        <Route path='/todo/:id' component={Todo} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
