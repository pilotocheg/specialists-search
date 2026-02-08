import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
