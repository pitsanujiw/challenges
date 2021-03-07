import styled from 'styled-components';
import { px2vw } from '@/utils';

export const Card = styled.div`
  display: flex;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #e2e2e2;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  position: relative;
  margin: ${px2vw(20)};
  height: 100%;
  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;
