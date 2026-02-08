import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSubjects } from 'api';

export const getSubjects = createAsyncThunk(
  'subjects/getSubjects',
  fetchSubjects,
);
