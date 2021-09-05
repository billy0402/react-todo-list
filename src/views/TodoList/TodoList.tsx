import React from 'react';

import Filter from './Filter';
import useTodoList from '../../hooks/useTodoList';

import styles from './index.scss';

const TodoList = () => {
  const todoList = useTodoList();

  return (
    <div className={styles.layout}>
      <div className={styles.todoListWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>Todo List</span>
          <span className={styles.subTitle}>
            Hi here is a sample todo list.
          </span>
        </div>
        <Filter
          filterIsDoneTodo={todoList.filterIsDoneTodo}
          switchFilterIsDoneTodo={todoList.switchFilterIsDoneTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
