import { addTodo, Action } from '../../src/actions';

describe('actions', () => {
  it('should create an action to add todo', () => {
    const text = 'Todo text';

    const expectedAction = {
      type: Action.ADD_TODO,
      text,
      id: 0,
    };

    expect(addTodo(text)).toEqual(expectedAction);
  });
});
