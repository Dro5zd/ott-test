import styled from "styled-components";
import {device} from "../../styles/mixins";

export const FaqTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  opacity: 0.9;
  margin-bottom: 24px;

  ${device.mobile} {
    font-size: 28px;
    margin-bottom: 32px;
  }

  ${device.tablet} {
    text-align: start;
    font-size: 30px;
    margin-bottom: 24px;
  }

  ${device.tabletLandscape} {
    font-size: 36px;
    line-height: 140%;
    margin-bottom: 40px;
    width: 435px;
  }

  ${device.desktop} {
    font-size: 40px;
    margin-bottom: 48px;
  }

  ${device.ultraWide} {
    width: 715px;
    font-size: 52px;
    margin-bottom: 70px;
  }
`;
