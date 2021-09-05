import { useState } from 'react';

import { Todo } from '../types/todoList';

const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return { todoList } as const;
};

export default useTodoList;
