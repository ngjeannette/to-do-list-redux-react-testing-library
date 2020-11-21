import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [],
  },
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { updateValue } = toDoSlice.actions;

// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectValue = state => state.todo.value;

export default toDoSlice.reducer;
