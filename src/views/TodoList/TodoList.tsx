import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Filter from './Filter';
import TodoItem from './TodoItem';
import Form from './Form';
import { rootState } from '../../store';
import {
  addTodo,
  deleteTodo,
  switchFilterIsDoneTodo,
  switchTodoIsDoneStatus,
} from '../../actions/todo';

import styles from './index.scss';

const TodoList = () => {
  const todoList = useSelector((state: rootState) => state.displayTodoList);
  const dispatch = useDispatch();

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
          filterIsDoneTodo={useSelector(
            (state: rootState) => state.filterIsDoneTodo,
          )}
          switchFilterIsDoneTodo={() => dispatch(switchFilterIsDoneTodo())}
        />
        <div className={styles.todoList}>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              switchTodoIsDoneStatus={(id) => {
                dispatch(switchTodoIsDoneStatus(id));
              }}
              deleteTodo={(id) => {
                dispatch(deleteTodo(id));
              }}
            />
          ))}
        </div>
        <Form
          addTodo={(id) => {
            dispatch(addTodo(id));
          }}
        />
      </div>
    </div>
  );
};

export default TodoList;
