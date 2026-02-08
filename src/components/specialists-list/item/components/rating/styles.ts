import styled from 'styled-components';

export const Rating = styled.div<{ isNew: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 28px;
  min-height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 4px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0%;
  padding-top: ${({ isNew }) => (isNew ? '7px' : '6px')};

  span {
    font-size: ${({ isNew }) => (isNew ? '8px' : '16px')};
    margin-top: ${({ isNew }) => (isNew ? '2px' : '0')};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 52px;
    min-height: 52px;
    top: 12px;
    left: 12px;
    font-size: 8px;
    padding-top: ${({ isNew }) => (isNew ? '14px' : '10px')};

    span {
      font-size: ${({ isNew }) => (isNew ? '16px' : '24px')};
      margin-top: 4px;
    }
  }
`;
