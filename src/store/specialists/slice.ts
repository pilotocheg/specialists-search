import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  specialists: [],
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    setSpecialists: (state, action) => {
      state.specialists = action.payload;
    },
  },
  selectors: {
    selectSpecialists: (state) => state.specialists,
  },
});
