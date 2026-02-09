import styled from 'styled-components';
import { Button } from 'components/commons/button';
import {
  FieldGroup,
  Label,
  StyledSelect,
} from 'components/commons/select/styles';

export const FiltersForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondaryLight};
  border-radius: 2px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-radius: 0;
    border-width: 0;
    border-bottom-width: 1px;
  }
`;

export const FiltersRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 80px;
  }
`;

export const AgeFieldGroup = styled(FieldGroup)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
`;

export const AgeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    justify-content: space-between;
  }

  & ${StyledSelect} {
    min-width: 60px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      min-width: 88px;
    }
  }

  & ${FieldGroup} {
    flex-direction: row;
    align-items: center;
    gap: 4px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 12px;
    }
  }

  & ${Label} {
    font-size: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-weight: 400;
      margin-left: 0;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
`;
