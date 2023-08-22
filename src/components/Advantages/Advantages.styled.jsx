import styled from "styled-components";
import {device} from "../../styles/mixins";

import check from '../../assets/icons/check.svg';

export const OfferList = styled.ul`
  margin-top: 24px;
  
  ${device.mobile} {
    margin-top: 32px;
  }

  ${device.tablet} {
    margin-top: 0;
  }
`;

export const OfferListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: start;
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.3px;
  gap: 16px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0
  }

  &:before {
    content: url(${check});
    height: 24px;
    width: 24px;
  }

  ${device.mobile} {
    font-size: 16px;
    margin-bottom: 18px;
  }

  ${device.tabletLandscape} {
    font-size: 18px;
    margin-bottom: 21px;
  }

  ${device.desktop} {
    width: 257px;
    font-size: 20px;
    margin-bottom: 20px;
  } 
  
  ${device.ultraWide} {
    width: 323px;
    font-size: 26px;
    margin-bottom: 26px;
  }
`;
