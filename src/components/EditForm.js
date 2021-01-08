import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/EditFormStyles.js';
import { EDIT_FIGURE } from '../constants/actions';

function EditForm({ id, task, toggleEditForm }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState(task);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: EDIT_FIGURE, id, task: value });
        toggleEditForm();
        clearValue();
      }}
      className={classes.EditForm}
    >
      <input
        autoFocus
        value={value}
        onChange={handleChange}
        onClick={e => e.stopPropagation()}
        className={classes.input}
      />
    </form>
  );
}

export default EditForm;