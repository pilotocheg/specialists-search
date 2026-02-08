import type { Specialist, SpecialistsResponseData } from 'api/types';

export type SetSpecialistsPayload = {
  data: SpecialistsResponseData;
  append?: boolean;
};

export type SpecialistsState = {
  specialists: Specialist[];
  totalCount: number;
  loading: boolean;
};
