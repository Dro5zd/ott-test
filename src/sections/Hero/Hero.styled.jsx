import styled from 'styled-components';
import {device} from '../../styles/mixins';
import {colors} from "../../styles/colors";

export const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.tablet} {
    align-items: flex-start;
    padding: 48px 0 0 40px;
  }

  ${device.tabletLandscape} {
    padding: 48px 0 0 48px;
  }

  ${device.desktop} {
    padding: 56px 0 0 172px;
  }

  ${device.ultraWide} {
    padding: 70px 0 0 229px;
  }
`;

export const HeroTitle = styled.h1`
  color: ${colors.fontPrimary};
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
  margin: 16px 16px 0 16px;

  ${device.mobile} {
    width: 343px;
    font-size: 28px;
    margin: 24px 16px 0 16px;
  }
  
  ${device.tablet} {
    width: 430px;
    font-size: 32px;
    text-align: left;
    margin: 0 0 24px 0;
  }

  ${device.tabletLandscape} {
    width: 465px;
    font-size: 38px;
    margin: 0 0 32px 0;
  }

  ${device.desktop} {
    width: 532px;
    font-size: 42px;
  }

  ${device.ultraWide} {
    width: 715px;
    font-size: 56px;
    margin: 0 0 50px 0;
  }
`;

export const HeroImg = styled.img`
  width: 280px;

  ${device.mobile} {
    width: 340px;
    min-width: 340px;
    padding: 0 18px;
  }

  ${device.tablet} {
    position: absolute;
    top: -13px;
    right: -215px;
    width: 526px;
    padding: 0;
  }

  ${device.tabletLandscape} {
    top: -33px;
    right: -140px;
    width: 640px;
  }

  ${device.desktop} {
    top: -33px;
    right: 0;
    width: 740px;
  }
  
  ${device.ultraWide} {
    top: -33px;
    width: 1006px;
  }
`;

export const HeroSubTitle = styled.p`
  min-width: 288px;
  text-align: center;
  font-weight: 400;
  opacity: 0.8;
  line-height: 140%;
  margin:  0 16px 24px 16px;

  ${device.mobile} {
    width: 343px;
    margin: 0 16px 32px 16px;
  }

  ${device.tablet} {
    width: 430px;
    text-align: left;
    margin-left: 0;
    margin-bottom: 34px;
    font-size: 17px;
  }

  ${device.tabletLandscape} {
    width: 522px;
    margin-bottom: 48px;
    font-size: 18px;
  }

  ${device.desktop} {
    width: 532px;
    font-size: 20px;
    margin-bottom: 56px;
  }

  ${device.ultraWide} {
    width: 708px;
    font-size: 26px;
    margin: 0 0 70px 0;
  }
`;

