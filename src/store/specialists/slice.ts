import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { SpecialistsState } from './types';
import type { SpecialistsResponse } from 'api/types';

const initialState: SpecialistsState = {
  specialists: [],
  totalCount: 0,
};

export const specialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {
    setSpecialists: (state, action: PayloadAction<SpecialistsResponse>) => {
      const { items, totalCount } = action.payload.data;
      state.specialists = items;
      state.totalCount = totalCount;
    },
  },
  selectors: {
    selectSpecialists: (state) => state.specialists,
  },
});
