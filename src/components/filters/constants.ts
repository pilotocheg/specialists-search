export const PAGE_SIZE = 12;

const MIN_AGE = 18;
const MAX_AGE = 99;

const AGE_OPTIONS = Array.from({ length: MAX_AGE - MIN_AGE + 1 }, (_, i) => {
  const age = MIN_AGE + i;
  return { value: String(age), label: String(age) };
});

export const AGE_FROM_OPTIONS = [{ value: '', label: 'От' }, ...AGE_OPTIONS];

export const AGE_TO_OPTIONS = [{ value: '', label: 'До' }, ...AGE_OPTIONS];

export const SEX_OPTIONS = [
  { value: '', label: 'Любого пола' },
  { value: '1', label: 'Мужчина' },
  { value: '2', label: 'Женщина' },
];

export const RATING_OPTIONS = [
  { value: '', label: 'Не важен' },
  { value: '50', label: '50+' },
  { value: '70', label: '70+' },
  { value: '90', label: '90+' },
];

export const QUALIFICATION_OPTIONS = [
  { value: '', label: 'Все варианты' },
  { value: '1', label: 'Консультант' },
  { value: '2', label: 'Сексолог' },
  { value: '3', label: 'Коуч' },
];
