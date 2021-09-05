import { createStore } from 'redux';

import todoList from '../reducers/todo';

export type rootState = ReturnType<typeof todoList>;

export default createStore(todoList);
