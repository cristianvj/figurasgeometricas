import React from 'react';
import useStyles from '../styles/AppStyles';
import TodoApp from './TodoApp';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <header className={classes.header}>
        <h1>
          <span>Figuras Geometricas</span>
        </h1>
        <h2>Lista de figuras geometricas usando React Hooks y Context</h2>
        <TodoApp/>
      </header>
    </div>
  );
}

export default App;
