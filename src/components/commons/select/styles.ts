import styled from 'styled-components';
import dropdownIcon from 'images/dropdown-icon.svg';

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 12px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  margin-left: 4px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;
    margin-left: 8px;
  }
`;

export const StyledSelect = styled.select`
  min-width: 120px;
  height: 40px;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;

  /* styles for the dropdown arrow */
  appearance: none;
  background-image: url(\"${dropdownIcon}\");
  background-repeat: no-repeat;
  background-position: calc(100% - 8px) center;
  background-size: 12px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 312px;
    height: 52px;
    font-size: 20px;
    padding: 0 12px;
    background-size: 16px;
    background-position-x: calc(100% - 12px);
  }
`;
