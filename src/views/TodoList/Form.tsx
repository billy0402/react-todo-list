import React, { useState } from 'react';

import { Todo } from '../../types/todoList';

import styles from './index.scss';

type FormProps = {
  addTodo: (todo: Todo) => void;
};

const Form = (props: FormProps) => {
  const [content, setContent] = useState<string>('');
  const submitForm = () => {
    const newTodo = { id: Math.random(), content, isDone: false };
    props.addTodo(newTodo);
    setContent('');
  };

  return (
    <div className={styles.form}>
      <span>Add to the todo list</span>
      <div>
        <input
          type='text'
          className={styles.todoInput}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button
          type='button'
          className={styles.submitButton}
          onClick={submitForm}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Form;
