import { v4 as uuidv4 } from 'uuid';
import {
  ADD_FIGURE, 
  REMOVE_FIGURE, 
  TOGGLE_FIGURE, 
  EDIT_FIGURE
} from '../constants/actions';

const reducer = (state, action) => {
  switch (action.type){

    case ADD_FIGURE:
      return [...state, {id: uuidv4(), task: action.task, completed: false}];
    
      case REMOVE_FIGURE:
      return state.filter(todo => todo.id !== action.id);

    case TOGGLE_FIGURE:
      return state.map(todo=>
          todo.id === action.id ? {...todo, completed: !todo.completed} : todo
        );

    case EDIT_FIGURE:
      return state.map(todo =>
        todo.id === action.id ? {...todo, task: action.task} : todo  
      );

    default:
      return state;
  }
};

export default reducer;