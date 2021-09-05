import React from 'react';

import { Todo } from '../../types/todoList';

import styles from './index.scss';

type TodoProps = {
  todo: Todo;
  switchTodoIsDoneStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoItem = (props: TodoProps) => {
  return (
    <div className={styles.todoItem}>
      <span
        style={{ textDecoration: props.todo.isDone ? 'line-through' : 'none' }}
      >
        {props.todo.content}
      </span>
      <input
        type='checkbox'
        checked={props.todo.isDone}
        onChange={() => {
          props.switchTodoIsDoneStatus(props.todo.id);
        }}
      />
      <button
        type='button'
        onClick={() => {
          props.deleteTodo(props.todo.id);
        }}
      >
        刪除
      </button>
    </div>
  );
};

export default TodoItem;
