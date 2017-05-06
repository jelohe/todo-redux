import React from 'react';
import history from './../history';

import { addTodo } from './../actions';
import store from './../TodoStore';

export default class NewTodo extends React.Component {
  constructor() {
    super();

    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo() {
    store.dispatch(addTodo(this.text.value));

    this.text.value = '';
    this.goBack();

    return this;
  }

  goBack() {
    history.push('/');

    return this;
  }

  render() {
    return (
      <div>
        <div className="list-element title">
          <button className="cancel" onClick={this.goBack}>
            <i className="material-icons">close</i>
          </button>
          <h3>New todo</h3>
          <button onClick={this.saveTodo} className="save">SAVE</button>
        </div>

        <div className="input-wrap">
          <input
            ref={(text) => { this.text = text; }}
            placeholder="Todo description"
            type="text"
          />
        </div>
      </div>
    );
  }
}
