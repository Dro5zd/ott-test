import styled from "styled-components";
import {device} from "../../styles/mixins";

export const DevicesContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;

  ${device.tablet} {
    flex-direction: row;
    padding-top: 30px;
  }
`;

export const DevicesTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //gap: 16px;
  width: 288px;

  ${device.mobile} {
    gap: 18px;
    width: 339px;
  }

  ${device.tablet} {
    width: 410px;
    align-items: flex-start;
    padding: 0 40px;
    gap: 24px;
  }

  ${device.tabletLandscape} {
   
  }

  ${device.desktop} {
    padding: 0 172px;
    //gap: 16px;
  }

  ${device.ultraWide} {
    padding: 0 229px;
    //gap: 30px;
  }
`;

export const DevicesTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  opacity: 0.9;
  margin-bottom: 16px;
  //width: max-content;

  ${device.mobile} {
    font-size: 28px;
    margin-bottom: 18px;
  }

  ${device.tablet} {
    text-align: start;
    font-size: 30px;
    margin-bottom: 24px;
  }

  ${device.tabletLandscape} {
    font-size: 36px;
    line-height: 140%;
    width: 435px;
  }

  ${device.desktop} {
    font-size: 40px;
    margin-bottom: 16px;
  }

  ${device.ultraWide} {
    width: 715px;
    font-size: 52px;
    margin-bottom: 30px;
  }
`;

export const DevicesSublsTitle = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: 150%;
  opacity: 0.8;
  margin-bottom: 5px;

  ${device.mobile} {
    margin-bottom: 13px;
  }
  
  ${device.tablet} {
    text-align: start;
    font-size: 16px;
    width: 410px;
    margin-bottom: 32px;
  }

  ${device.tabletLandscape} {
    width: 480px;
    margin-bottom: 40px;
  }
  ${device.desktop} {
    width: 530px;
    margin-bottom: 48px;
  }

  ${device.ultraWide} {
    width: 715px;
    font-size: 20px;
    margin-bottom: 60px;
  }
`;

export const DevicesImg = styled.img`
  width: 280px;
  margin-bottom: 40px;

  ${device.mobile} {
    width: 340px;
    min-width: 340px;
    padding: 0 18px;
  }

  ${device.tablet} {
    position: absolute;
    top: 35px;
    right: -180px;
    width: 470px;
    padding: 0;
  }

  ${device.tabletLandscape} {
    top: 82px;
    right: -176px;
    width: 590px;
  }

  ${device.desktop} {
    top: 63px;
    right: 87px;
    width: 590px;
  }
  
  ${device.ultraWide} {
    top: 125px;
    right: 116px;
    width: 786px;
  }
`;
