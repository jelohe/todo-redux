import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import history from './history';

import TodoStore from './TodoStore';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

render(
  <Provider store={TodoStore}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={TodoList} />
        <Route path="/addTodo" component={AddTodo} />
      </div>
    </Router>
  </Provider>,
  document.querySelector('#root'),
);
