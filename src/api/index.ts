import axios from 'axios';

import type {
  GetSpecialistsParams,
  SpecialistsResponse,
  SubjectsResponse,
} from './types';

axios.defaults.baseURL = 'https://specialists-search-api.onrender.com/api';

interface FetchOptions {
  errorTitle: string;
  params?: Record<string, unknown>;
}

const makeFetch = async <T>(
  url: string,
  { errorTitle, ...options }: FetchOptions,
): Promise<T> => {
  try {
    const response = await axios.get<T>(url, options);
    return response.data;
  } catch (error) {
    // TODO: Implement proper error handling
    console.error(`${errorTitle}:`, error);
    throw error;
  }
};

export const fetchSpecialists = (
  params: GetSpecialistsParams,
): Promise<SpecialistsResponse> =>
  makeFetch('/specialists', {
    errorTitle: 'Error fetching specialists',
    params,
  });

export const fetchSubjects = (): Promise<SubjectsResponse> =>
  makeFetch('/subjects', {
    errorTitle: 'Error fetching subjects',
  });
