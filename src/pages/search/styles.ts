import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  max-width: calc(600px + 16px * 2);
  padding: 16px 16px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: calc(1096px + 40px * 2);
    padding: 52px 40px 80px;
  }
`;
