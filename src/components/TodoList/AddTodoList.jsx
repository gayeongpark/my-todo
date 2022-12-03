import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodoList.module.css';

export default function AddTodoList({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          value={text}
          onChange={handleChange}
          placeholder='Add Todo list'
          required
        />
        <button className={styles.button} type='submit'>Add</button>
      </form>
    </>
  );
}
