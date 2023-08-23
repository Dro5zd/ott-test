import styled from 'styled-components';
import {device} from '../../styles/mixins';

export const MainContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 32px 16px 0 16px;

  ${device.tablet} {
    padding: 40px 40px 0 40px;
    
  }

  ${device.tabletLandscape} {
    padding: 48px 48px 0 48px;
  }

  ${device.desktop} {
    padding: 48px 172px 0 172px;
  }

  ${device.ultraWide} {
    padding: 60px 229px 0 229px;
  }
`;
