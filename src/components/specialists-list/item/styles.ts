import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.textSecondaryLight};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const NameContainer = styled.div`
  position: relative;
  width: fit-content;
`;

export const Name = styled.h3`
  font-size: 14px;
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 26px;
  }
`;

export const ContentContainer = styled.div`
  margin-top: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 16px;
  }
`;

export const OnlineStatus = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.online};
  position: absolute;
  top: 0;
  right: -12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 12px;
    height: 12px;
    right: -16px;
  }
`;

export const InfoText = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};

  span {
    opacity: 0.5;
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 18px;

    span {
      display: inline;
    }
  }
`;

export const LastOnlineText = styled.p`
  display: none;
  margin-top: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondaryLight};

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;
