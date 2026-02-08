import axios, { type AxiosRequestConfig } from 'axios';

import type {
  GetSpecialistsParams,
  SpecialistsResponse,
  SubjectsResponse,
} from './types';

axios.defaults.baseURL = 'https://specialists-search-api.onrender.com/api';

const makeFetch = async <T>(
  url: string,
  options?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const response = await axios.get<T>(url, options);
    return response.data;
  } catch (error) {
    // TODO: Implement proper error handling
    console.error('Network error:', error);
    throw error;
  }
};

export const fetchSpecialists = (params: GetSpecialistsParams) =>
  makeFetch<SpecialistsResponse>('/specialists', {
    params,
  }).then((response) => response.data);

export const fetchSubjects = () =>
  makeFetch<SubjectsResponse>('/subjects').then((response) => response.data);
