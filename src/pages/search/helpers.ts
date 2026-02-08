import type { GetSpecialistsParams } from 'api/types';

export const PAGE_SIZE = 12;
const AGE_OPTIONS = Array.from({ length: 57 }, (_, i) => 18 + i); // 18–74

export const AGE_FROM_OPTIONS = AGE_OPTIONS;
export const AGE_TO_OPTIONS = AGE_OPTIONS;

export const SEX_OPTIONS = [
  { value: '', label: 'Любого пола' },
  { value: '1', label: 'Мужской' },
  { value: '2', label: 'Женский' },
] as const;

export const RATING_OPTIONS = [
  { value: '', label: 'Не важен' },
  { value: '50', label: '50+' },
  { value: '70', label: '70+' },
  { value: '90', label: '90+' },
] as const;

export const QUALIFICATION_OPTIONS = [
  { value: '', label: 'Все варианты' },
  { value: '1', label: 'Консультант' },
  { value: '2', label: 'Сексолог' },
  { value: '3', label: 'Коуч' },
] as const;

export type FilterFormValues = {
  sex: string;
  ageFrom: string;
  ageTo: string;
  subjectId: string;
  profSpeciality: string;
  rating: string;
};

export const defaultFilterValues: FilterFormValues = {
  sex: '',
  ageFrom: '18',
  ageTo: '74',
  subjectId: '',
  profSpeciality: '',
  rating: '',
};

function parseNum(value: string | null): number | undefined {
  if (value == null || value === '') return undefined;
  const n = Number(value);
  return Number.isNaN(n) ? undefined : n;
}

export function searchParamsToFilters(
  searchParams: URLSearchParams,
): FilterFormValues {
  return {
    sex: searchParams.get('sex') ?? defaultFilterValues.sex,
    ageFrom: searchParams.get('ageFrom') ?? defaultFilterValues.ageFrom,
    ageTo: searchParams.get('ageTo') ?? defaultFilterValues.ageTo,
    subjectId: searchParams.get('subjectId') ?? defaultFilterValues.subjectId,
    profSpeciality:
      searchParams.get('profSpeciality') ?? defaultFilterValues.profSpeciality,
    rating: searchParams.get('rating') ?? defaultFilterValues.rating,
  };
}

export function filtersToSearchParams(
  values: FilterFormValues,
): Record<string, string> {
  const params: Record<string, string> = {};
  if (values.sex !== '') params.sex = values.sex;
  if (values.ageFrom !== '' && values.ageFrom !== defaultFilterValues.ageFrom)
    params.ageFrom = values.ageFrom;
  if (values.ageTo !== '' && values.ageTo !== defaultFilterValues.ageTo)
    params.ageTo = values.ageTo;
  if (values.subjectId !== '') params.subjectId = values.subjectId;
  if (values.profSpeciality !== '')
    params.profSpeciality = values.profSpeciality;
  if (values.rating !== '') params.rating = values.rating;
  return params;
}

export function searchParamsToApiParams(
  searchParams: URLSearchParams,
): GetSpecialistsParams {
  const sex = parseNum(searchParams.get('sex'));
  const ageFrom = parseNum(searchParams.get('ageFrom'));
  const ageTo = parseNum(searchParams.get('ageTo'));
  const subjectId = parseNum(searchParams.get('subjectId'));
  const profSpeciality = parseNum(searchParams.get('profSpeciality'));
  const rating = parseNum(searchParams.get('rating'));
  const limit = parseNum(searchParams.get('limit')) ?? PAGE_SIZE;
  const offset = parseNum(searchParams.get('offset')) ?? 0;
  const effectiveAgeFrom = ageFrom ?? parseInt(defaultFilterValues.ageFrom, 10);
  const effectiveAgeTo = ageTo ?? parseInt(defaultFilterValues.ageTo, 10);

  return {
    ...(sex != null && sex !== 0 && { sex }),
    ageFrom: effectiveAgeFrom,
    ageTo: effectiveAgeTo,
    ...(subjectId != null && subjectId !== 0 && { subjectId }),
    ...(profSpeciality != null && { profSpeciality }),
    ...(rating != null && { ratingFrom: rating, ratingTo: 100 }),
    limit,
    offset,
  };
}
