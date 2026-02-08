import { createSlice } from '@reduxjs/toolkit';

import type { SpecialistsState } from './types';
import { getSpecialists } from './thunks';

const initialState: SpecialistsState = {
  specialists: [],
  totalCount: 0,
  loading: true,
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpecialists.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSpecialists.fulfilled, (state, action) => {
      const { data, append } = action.payload;
      const { items, totalCount } = data;
      state.specialists = append ? [...state.specialists, ...items] : items;
      state.totalCount = totalCount;
      state.loading = false;
    });
    builder.addCase(getSpecialists.rejected, (state) => {
      state.loading = false;
    });
  },
  selectors: {
    selectSpecialists: (state) => state.specialists,
    selectTotalCount: (state) => state.totalCount,
    selectHasMore: (state) => state.specialists.length < state.totalCount,
    selectLoading: (state) => state.loading,
  },
});
