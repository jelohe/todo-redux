import React from 'react';

import history from './../history';
import store from './../TodoStore';

import Todo from './Todo';

function getTodoListState() {
  return {
    todos: store.getState(),
  };
}

export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = getTodoListState();
  }

  goAddTodo() {
    history.push('addTodo');

    return this;
  }

  render() {
    const todoList = this.state.todos.map(todo =>
      <Todo key={todo.id} text={todo.text} />,
    );

    return (
      <div>
        <div className="list-element title">
          <h3>Todo list</h3>
        </div>
        {todoList}
        <button className="add-todo-button" onClick={this.goAddTodo}>
          <i className="material-icons">add</i>
        </button>
      </div>
    );
  }
}
