import { createStore } from 'redux';
import reducer from './reducers/todoReducer';

export default createStore(reducer, {});
