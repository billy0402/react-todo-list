import { Todo } from '../types/todoList';

interface AddTodo {
  type: 'ADD_TODO';
  payload: Todo;
}

interface DeleteTodo {
  type: 'DELETE_TODO';
  payload: number;
}

interface SwitchTodoIsDoneStatus {
  type: 'SWITCH_TODO_IS_DONE_STATUS';
  payload: number;
}

interface SwitchFilterIsDoneTodo {
  type: 'SWITCH_FILTER_IS_DONE_TODO';
}

export const addTodo = (todo: Todo): AddTodo => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const deleteTodo = (id: number): DeleteTodo => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const switchTodoIsDoneStatus = (id: number): SwitchTodoIsDoneStatus => ({
  type: 'SWITCH_TODO_IS_DONE_STATUS',
  payload: id,
});

export const switchFilterIsDoneTodo = (): SwitchFilterIsDoneTodo => ({
  type: 'SWITCH_FILTER_IS_DONE_TODO',
});

export type TodoActionTypes =
  | AddTodo
  | DeleteTodo
  | SwitchTodoIsDoneStatus
  | SwitchFilterIsDoneTodo;
