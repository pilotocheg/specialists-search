import type { GetSpecialistsParams } from 'api/types';
import { SEARCH_PAGE_SIZE } from 'constants/api';
import { getParamsValue } from 'helpers/search-params';

export function searchParamsToSpecialistsParams(
  searchParams: URLSearchParams,
): GetSpecialistsParams {
  const sex = getParamsValue(searchParams, 'sex');
  const ageFrom = getParamsValue(searchParams, 'ageFrom');
  const ageTo = getParamsValue(searchParams, 'ageTo');
  const subjectId = getParamsValue(searchParams, 'subjectId');
  const profSpeciality = getParamsValue(searchParams, 'profSpeciality');
  const raring = getParamsValue(searchParams, 'rating');
  const limit = getParamsValue(searchParams, 'limit') ?? SEARCH_PAGE_SIZE;
  const offset = getParamsValue(searchParams, 'offset') ?? 0;

  return {
    sex,
    ageFrom,
    ageTo,
    subjectId,
    profSpeciality,
    ratingFrom: raring,
    limit,
    offset,
  };
}
