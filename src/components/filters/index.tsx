import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router';

import { Select } from 'components/commons/select';
import type { FilterFormValues } from 'components/filters/form';
import { Label } from 'components/commons/select/styles';
import {
  SEX_OPTIONS,
  AGE_FROM_OPTIONS,
  AGE_TO_OPTIONS,
  RATING_OPTIONS,
  QUALIFICATION_OPTIONS,
} from './constants';
import { defaultValues } from './form';
import {
  FiltersForm,
  AgeRow,
  SubmitButton,
  AgeFieldGroup,
  FiltersRow,
} from './styles';
import { useSubjectsLoader } from './hooks';
import { filtersToSearchParams, searchParamsToFilters } from './helpers';
import { useRootSelector } from 'store/hooks';
import { selectLoading } from 'store/specialists';

export function Filters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { subjects } = useSubjectsLoader();
  const specialistsLoading = useRootSelector(selectLoading);

  const { register, handleSubmit, reset } = useForm<FilterFormValues>({
    defaultValues,
  });

  useEffect(() => {
    reset(searchParamsToFilters(searchParams, defaultValues));
  }, [searchParams, reset]);

  const onSubmit = (values: FilterFormValues) => {
    setSearchParams(filtersToSearchParams(values), {
      replace: true,
    });
  };

  const subjectOptions = useMemo(
    () => [
      { value: '', label: 'Все темы' },
      ...subjects.map((s) => ({ value: String(s.id), label: s.name })),
    ],
    [subjects],
  );

  return (
    <FiltersForm onSubmit={handleSubmit(onSubmit)}>
      <FiltersRow>
        <Select
          label="Я ищу психолога"
          options={SEX_OPTIONS}
          {...register('sex')}
        />

        <AgeFieldGroup>
          <Label>В возрасте</Label>
          <AgeRow>
            <Select
              label="От"
              options={AGE_FROM_OPTIONS}
              {...register('ageFrom')}
            />
            <Select
              label="До"
              options={AGE_TO_OPTIONS}
              {...register('ageTo')}
            />
          </AgeRow>
        </AgeFieldGroup>

        <Select
          label="Тема"
          options={subjectOptions}
          disabled={!subjects.length}
          {...register('subjectId')}
        />
      </FiltersRow>

      <FiltersRow>
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

        <SubmitButton disabled={specialistsLoading} type="submit">
          Показать анкеты
        </SubmitButton>
      </FiltersRow>
    </FiltersForm>
  );
}
