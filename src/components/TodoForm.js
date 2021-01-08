import React, {useContext} from 'react'
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/TodoFormStyles';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/actions';

function TodoForm() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState('');
  
  return (
    <form
      onSubmit={e=>{
        e.preventDefault();
        dispatch({type: ADD_TODO, task: value});
        reset();
      }}
      className={classes.TodoForm}
    >
    <input
      placeholder='+ Agrega una figura geometrica'
      value={value}
      onChange={handleChange}
      className={classes.input}
    />
    </form>
  )
}

export default TodoForm;