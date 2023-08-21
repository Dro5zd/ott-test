import styled from 'styled-components';
import {device} from '../../styles/mixins';

export const MainContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;

  ${device.mobile} {
    padding: 10px;
  }

  ${device.tablet} {
    padding: 20px;
  }

  ${device.desktop} {
    padding: 30px;
  }
`;
