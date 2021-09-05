import { useState } from 'react';

import { Todo } from '../types/todoList';

const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodoList([...todoList, todo]);
  };

  const switchTodoIsDoneStatus = (id: number) => {
    const targetTodoIndex = todoList.findIndex((todo: Todo) => todo.id === id);

    const newTodoList = [...todoList];

    newTodoList[targetTodoIndex] = {
      ...newTodoList[targetTodoIndex],
      isDone: !newTodoList[targetTodoIndex].isDone,
    };

    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== id);

    setTodoList(newTodoList);
  };

  const [filterIsDoneTodo, setFilterIsDoneTodo] = useState<boolean>(false);

  const switchFilterIsDoneTodo = () => {
    setFilterIsDoneTodo(!filterIsDoneTodo);
  };

  let workTodoList = todoList;
  if (filterIsDoneTodo) {
    workTodoList = todoList.filter((todo) => !todo.isDone);
  }

  return {
    todoList: workTodoList,
    addTodo,
    switchTodoIsDoneStatus,
    deleteTodo,
    filterIsDoneTodo,
    switchFilterIsDoneTodo,
  } as const;
};

export default useTodoList;
