import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subjects: [],
};

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {
    setSubjects: (state, action) => {
      state.subjects = action.payload;
    },
  },
  selectors: {
    selectSubjects: (state) => state.subjects,
  },
});
