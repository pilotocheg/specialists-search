function parseNum(value: string | null): number | undefined {
  if (value == null || value === '') return undefined;
  const n = Number(value);
  return Number.isNaN(n) ? undefined : n;
}

export function getParamsValue(
  searchParams: URLSearchParams,
  param: string,
): number | undefined {
  return parseNum(searchParams.get(param));
}
