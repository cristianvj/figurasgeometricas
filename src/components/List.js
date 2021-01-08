import React, {useContext, useState} from 'react';
import {TodosContext} from '../contexts/todos.context';
import Item from './Item';

import useStylesList from '../styles/ListStyle';
import useStyles from '../styles/FormStyles';


function List() {
  const [value, setValue] = useState('')
  const todos = useContext(TodosContext);
  const classes = useStyles();
  const classesList = useStylesList();

  return (
    <div className={classesList.List}>
      <form
        onSubmit={e=>{
          e.preventDefault();
        }}
        
      >
      <input
        placeholder='- Buscar Figura en la lista'
        value={value}
        onChange={e=>setValue(e.target.value)}
        className={classes.input}
      />
      </form>

      <ul style={{ paddingLeft: 10, width: '95%' }}>
        {
          todos.filter(todo=>todo.task.toLowerCase().includes(value.toLowerCase())).map(todo=>(
            <Item key={todo.id} {...todo} />
          ))
        }
      </ul>
    </div>
  )
}

export default List
