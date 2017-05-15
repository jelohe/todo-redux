let nextTodoId = 0;

export const Action = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

function increaseId() {
  const currentTodoId = nextTodoId;
  nextTodoId += 1;

  return currentTodoId;
}

export const addTodo = text => ({
  type: Action.ADD_TODO,
  id: increaseId(),
  text,
});

export const removeTodo = id => ({
  type: Action.REMOVE_TODO,
  id,
});

export const toggleTodo = id => ({
  type: Action.TOGGLE_TODO,
  id,
});
