import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  text-align: center;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 160px;
    height: 160px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.6;
  max-width: 180px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 20px;
    max-width: 264px;
  }
`;
