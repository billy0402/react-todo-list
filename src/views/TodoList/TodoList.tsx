import React from 'react';

import styles from './index.scss';

const TodoList = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.todoListWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>Todo List</span>
          <span className={styles.subTitle}>
            Hi here is a sample todo list.
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
