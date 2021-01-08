import React, {useContext, useState} from 'react';
import {TodosContext} from '../contexts/todos.context';
import Todo from './Todo';

import useStyles from '../styles/TodoFormStyles';


function TodoList() {
  const [value, setValue] = useState('')
  const todos = useContext(TodosContext);
  const classes = useStyles();

  return (
    <>
      <form
        onSubmit={e=>{
          e.preventDefault();
        }}
        className={classes.TodoForm}
      >
      <input
        placeholder='Filter'
        value={value}
        onChange={e=>setValue(e.target.value)}
        className={classes.input}
      />
      </form>

      <ul style={{ paddingLeft: 10, width: '95%' }}>
        {
          todos.filter(todo=>todo.task.toLowerCase().includes(value.toLowerCase())).map(todo=>(
            <Todo key={todo.id} {...todo} />
          ))
        }
      </ul>
    </>
  )
}

export default TodoList
