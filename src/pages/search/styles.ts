import styled from 'styled-components';
import { Button } from 'components/commons/button';

export const PageContainer = styled.div`
  margin: 16px auto 40px;
  max-width: 1096px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadMoreButton = styled(Button)`
  margin-top: 32px;
`;
