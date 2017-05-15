import { Action } from '../actions';

function reducer(state, action) {
  let newState = [];

  switch (action.type) {
    case Action.ADD_TODO: {
      newState = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
      break;
    }

    case Action.REMOVE_TODO: {
      newState = state.filter(todo => todo.id !== action.id);
      break;
    }

    case Action.TOGGLE_TODO: {
      newState = state.filter(todo => todo.id === action.id)
        .map(todo => Object.assign({}, todo, { completed: !todo.completed }));
      break;
    }

    default: {
      newState = [...state];
    }
  }

  return newState;
}

export default reducer;
