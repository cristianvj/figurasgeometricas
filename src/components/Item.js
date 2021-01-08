import React, { useContext, memo } from 'react';
import { DispatchContext } from '../contexts/todos.context';
import EditForm from './EditForm';
import useToggleState from '../hooks/useToggleState';
import useStyles from '../styles/ItemStyles.js';
import { REMOVE_FIGURE, TOGGLE_FIGURE } from '../constants/actions';

function Item({ id, task, completed }) {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggleState(false);
 
  if (isEditing) {
    return (
      <li
        className={classes.item}
        style={{ overflowY: 'hidden' }}
        onClick={() => toggle()}
      >
        <EditForm id={id} task={task} toggleEditForm={toggle} />
      </li>
    );
  }

  return (
    <li
      className={classes.item}
      onClick={() => dispatch({ type: TOGGLE_FIGURE, id })}
    >
      <span
        style={{
          textDecoration: completed ? 'line-through' : '',
          color: completed ? '#bdc3c7' : '#34495e'
        }}
      >
        {task}
      </span>
      <div className={classes.icons}>
        <i
          style={{ color: '#c0392b' }}
          className="fas fa-trash"
          onClick={e => {
            e.stopPropagation();
            dispatch({ type: REMOVE_FIGURE, id });
          }}
        />
        <i
          style={{ color: '#58b2dc' }}
          className="fas fa-pen"
          onClick={e => {
            e.stopPropagation();
            toggle();
          }}
        />
      </div>
    </li>
  );
}

export default memo(Item);