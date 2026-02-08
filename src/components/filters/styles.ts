import styled from 'styled-components';
import { Button } from 'components/commons/button';

export const FiltersForm = styled.form`
  width: 100%;
  max-width: 1096px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px 24px;
  margin-bottom: 24px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & .age-select {
    min-width: 72px;
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  flex-shrink: 0;
`;
