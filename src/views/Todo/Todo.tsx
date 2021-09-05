import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { Todo as ITodo } from '../../types/todoList';
import { rootState } from '../../store';
import { getTodoById } from '../../actions/todo';

import styles from './index.scss';

const Todo = () => {
  const { id }: { id: string } = useParams();
  // const todoList: ITodo[] = useSelector((state: rootState) => state.todoList);
  // const todo: ITodo = todoList.find(
  //   (todo: ITodo) => todo.id === Number(id),
  // ) as ITodo;
  const todo: ITodo = useSelector((state: rootState) => state.todo);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getTodoById(Number(id)));
  });

  return (
    <div className={styles.layout}>
      <div className={styles.todo}>
        <span>ID: {todo.id}</span>
        <h1>{todo.content}</h1>
        <p>
          完成狀況：
          <span style={{ color: todo.isDone ? '#21bf73' : '#eb8f8f' }}>
            {todo.isDone ? '已完成' : '未完成'}
          </span>
        </p>
        <button
          type='button'
          onClick={() => {
            history.push('/');
          }}
        >
          回待辦事項列表
        </button>
      </div>
    </div>
  );
};

export default Todo;
