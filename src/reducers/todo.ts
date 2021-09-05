import { Todo } from '../types/todoList';
import { TodoActionTypes } from '../actions/todo';

interface TodoState {
  todoList: Todo[];
  displayTodoList: Todo[];
  filterIsDoneTodo: boolean;
}

const initialState: TodoState = {
  todoList: [],
  displayTodoList: [],
  filterIsDoneTodo: false,
};

const filterDisplayTodoList = (filterIsDoneTodo: boolean, todoList: Todo[]) => {
  if (filterIsDoneTodo) {
    return todoList.filter((todo) => !todo.isDone);
  }

  return [...todoList];
};

const todo = (state = initialState, action: TodoActionTypes): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        displayTodoList: filterDisplayTodoList(state.filterIsDoneTodo, [
          ...state.todoList,
          action.payload,
        ]),
      };
    case 'DELETE_TODO': {
      const newTodoList = state.todoList.filter(
        (todo: Todo) => todo.id !== action.payload,
      );
      return {
        ...state,
        todoList: [...newTodoList],
        displayTodoList: filterDisplayTodoList(state.filterIsDoneTodo, [
          ...newTodoList,
        ]),
      };
    }
    case 'SWITCH_TODO_IS_DONE_STATUS': {
      const targetTodoIndex = state.todoList.findIndex(
        (todo: Todo) => todo.id === action.payload,
      );

      const newTodoList = [...state.todoList];

      newTodoList[targetTodoIndex] = {
        ...newTodoList[targetTodoIndex],
        isDone: !newTodoList[targetTodoIndex].isDone,
      };

      return {
        ...state,
        todoList: [...newTodoList],
        displayTodoList: filterDisplayTodoList(state.filterIsDoneTodo, [
          ...newTodoList,
        ]),
      };
    }
    case 'SWITCH_FILTER_IS_DONE_TODO':
      return {
        ...state,
        filterIsDoneTodo: !state.filterIsDoneTodo,
        displayTodoList: filterDisplayTodoList(!state.filterIsDoneTodo, [
          ...state.todoList,
        ]),
      };
    default:
      return state;
  }
};

export default todo;
