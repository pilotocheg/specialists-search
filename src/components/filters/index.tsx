import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';

import { Select } from 'components/commons/select';
import type { FilterFormValues } from 'pages/search/helpers';
import {
  defaultFilterValues,
  searchParamsToFilters,
  filtersToSearchParams,
  SEX_OPTIONS,
  AGE_FROM_OPTIONS,
  AGE_TO_OPTIONS,
  RATING_OPTIONS,
  QUALIFICATION_OPTIONS,
} from 'pages/search/helpers';
import { FiltersForm, FieldGroup, Label, AgeRow, SubmitButton } from './styles';
import { useSubjectsLoader } from './hooks';

const AGE_FROM_OPTIONS_WITH_LABEL = [
  { value: '', label: 'От' },
  ...AGE_FROM_OPTIONS.map((age) => ({
    value: String(age),
    label: String(age),
  })),
] as const;

const AGE_TO_OPTIONS_WITH_LABEL = [
  { value: '', label: 'До' },
  ...AGE_TO_OPTIONS.map((age) => ({ value: String(age), label: String(age) })),
] as const;

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { subjects } = useSubjectsLoader();

  const { register, handleSubmit, reset } = useForm<FilterFormValues>({
    defaultValues: defaultFilterValues,
  });

  useEffect(() => {
    reset(searchParamsToFilters(searchParams));
  }, [searchParams, reset]);

  const onSubmit = (values: FilterFormValues) => {
    setSearchParams(filtersToSearchParams(values), { replace: true });
  };

  const subjectOptions = [
    { value: '', label: 'Все темы' },
    ...subjects.map((s) => ({ value: String(s.id), label: s.name })),
  ];

  return (
    <FiltersForm onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Я ищу психолога"
        options={SEX_OPTIONS}
        {...register('sex')}
      />

      <FieldGroup>
        <Label>В возрасте</Label>
        <AgeRow>
          <Select
            options={AGE_FROM_OPTIONS_WITH_LABEL}
            className="age-select"
            {...register('ageFrom')}
          />
          <Select
            options={AGE_TO_OPTIONS_WITH_LABEL}
            className="age-select"
            {...register('ageTo')}
          />
        </AgeRow>
      </FieldGroup>

      <Select
        label="Тема"
        options={subjectOptions}
        disabled={!subjects.length}
        {...register('subjectId')}
      />

      <Select
        label="Квалификация"
        options={QUALIFICATION_OPTIONS}
        {...register('profSpeciality')}
      />

      <Select
        label="Рейтинг"
        options={RATING_OPTIONS}
        {...register('rating')}
      />

      <SubmitButton type="submit">Показать анкеты</SubmitButton>
    </FiltersForm>
  );
}
