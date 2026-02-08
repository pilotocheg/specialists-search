import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSpecialists } from 'api';
import type { GetSpecialistsParams } from 'api/types';
import type { RootState } from 'store/store';

import type { SetSpecialistsPayload } from './types';

export const getSpecialists = createAsyncThunk<
  SetSpecialistsPayload,
  GetSpecialistsParams
>('specialists/getSpecialists', async (params, { getState }) => {
  const { totalCount } = (getState() as RootState).specialists;

  // in case of page reload, if there's an offset in the URL, we need to load last page state
  if (!totalCount && params.offset > 0) {
    params.limit += params.offset;
    params.offset = 0;
  }

  const data = await fetchSpecialists(params);

  return { data, append: params.offset > 0 };
});
