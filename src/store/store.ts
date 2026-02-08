import { combineSlices, configureStore } from '@reduxjs/toolkit';

import specialistsSlice from './specialists';
import subjectsSlice from './subjects';

const reducer = combineSlices(specialistsSlice, subjectsSlice);

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
