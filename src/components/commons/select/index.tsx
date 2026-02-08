import type { ComponentPropsWithoutRef } from 'react';
import { FieldGroup, Label, StyledSelect } from './styles';

export type SelectOption = {
  value: string;
  label: string;
};

type Props = ComponentPropsWithoutRef<typeof StyledSelect> & {
  label?: string;
  options: readonly SelectOption[];
};

export function Select({ label, options, ...selectProps }: Props) {
  const select = (
    <StyledSelect {...selectProps}>
      {options.map(({ value, label: optionLabel }) => (
        <option key={value || 'any'} value={value}>
          {optionLabel}
        </option>
      ))}
    </StyledSelect>
  );

  if (label != null) {
    return (
      <FieldGroup>
        <Label>{label}</Label>
        {select}
      </FieldGroup>
    );
  }

  return select;
}
