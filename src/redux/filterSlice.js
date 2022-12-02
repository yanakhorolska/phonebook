import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  input: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.input = action.payload;
      },
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
