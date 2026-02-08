import { createSlice } from '@reduxjs/toolkit';
import type { SubjectsState } from './types';
import { getSubjects } from './thunks';

const initialState: SubjectsState = {
  subjects: [],
};

export const subjectsSlice = createSlice({
  name: 'subjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubjects.fulfilled, (state, action) => {
      state.subjects = action.payload;
    });
  },
  selectors: {
    selectSubjects: (state) => state.subjects,
  },
});
