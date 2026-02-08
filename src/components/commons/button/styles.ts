import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 200px;
  height: 38px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimaryLight};
  font-weight: 700;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
