import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 20px;
  }
`;
