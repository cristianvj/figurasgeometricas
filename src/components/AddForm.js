import React, {useContext} from 'react'
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/FormStyles';
import { ADD_FIGURE } from '../constants/actions';

function AddForm() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState('');
  
  return (
    <form
      onSubmit={e=>{
        e.preventDefault();
        dispatch({type: ADD_FIGURE, task: value});
        reset();
      }}
      className={classes.Form}
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

export default AddForm;