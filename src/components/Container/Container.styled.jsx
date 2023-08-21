import styled from 'styled-components';
import {device} from '../../styles/mixins';

export const MainContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;

  ${device.tablet} {
    padding: 40px;
  }

  ${device.tabletLandscape} {
    padding: 48px;
  }

  ${device.desktop} {
    padding: 172px;
  }

  ${device.ultraWide} {
    padding: 229px;
  }
`;
