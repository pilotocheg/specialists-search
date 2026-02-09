import { type FilterFormValues } from './form';

export function searchParamsToFilters(
  searchParams: URLSearchParams,
  defaultValues: FilterFormValues,
): FilterFormValues {
  return Object.entries(defaultValues).reduce((values, [key, defaultValue]) => {
    values[key as keyof FilterFormValues] =
      searchParams.get(key) ?? defaultValue;
    return values;
  }, {} as FilterFormValues);
}

export function filtersToSearchParams(
  values: FilterFormValues,
): Record<string, string> {
  return Object.entries(values).reduce(
    (params, [key, value]) => {
      if (value) {
        params[key] = value;
      }
      return params;
    },
    {} as Record<string, string>,
  );
}
