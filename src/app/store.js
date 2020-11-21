import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/Todo/toDoSlice';

export default configureStore({
  reducer: {
    todo: toDoReducer
  },
  preloadedState: {
    todo: {
      value: [],
    }
  },
});