import reducer from '../../src/reducers/todoReducer';
import { Action } from '../../src/actions';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer([], {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    const oldState = [];

    const action = {
      id: 0,
      type: Action.ADD_TODO,
      text: 'My new todo',
    };

    const newState = [{
      id: 0,
      text: 'My new todo',
      completed: false,
    }];

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle REMOVE_TODO', () => {
    const oldState = [{
      text: 'An old todo',
      completed: false,
      id: 20,
    }];

    const action = {
      type: Action.REMOVE_TODO,
      id: 20,
    };

    const newState = [];

    expect(reducer(oldState, action)).toEqual(newState);
  });

  it('should handle TOGGLE_TODO', () => {
    const oldState = [{
      text: 'An uncompleted todo',
      completed: false,
      id: 12,
    }];

    const action = {
      type: Action.TOGGLE_TODO,
      id: 12,
    };

    const newState = [{
      text: 'An uncompleted todo',
      completed: true,
      id: 12,
    }];

    expect(reducer(oldState, action)).toEqual(newState);
  });
});
