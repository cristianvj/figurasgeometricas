import React from 'react';
import {TodosProvider} from '../contexts/todos.context';
import AddForm from './AddForm';
import List from './List';

function ListApp() {
  return (
    <TodosProvider>
      <List/>
      <AddForm/>
    </TodosProvider>
  )
}

export default ListApp;
