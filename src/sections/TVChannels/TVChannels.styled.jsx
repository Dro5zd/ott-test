import styled from "styled-components";
import {device} from "../../styles/mixins";
import tickets from '../../assets/icons/tickets.svg';
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';
import {colors} from "../../styles/colors";

export const TvChannelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin-bottom: 18px;

  ${device.mobile} {
    margin-bottom: 26px;
  } 
  
  ${device.tabletLandscape} {
    padding-top: 30px;
    margin-bottom: 34px;
  } 
  ${device.desktop} {
    margin-bottom: 59px;
  } 
  
  ${device.ultraWide} {
    margin-bottom: 84px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 288px;

  ${device.mobile} {
    gap: 13px;
    width: 343px;
  }

  ${device.tablet} {
    width: 100%;
    align-items: flex-start;
    padding: 0 40px;
    gap: 16px;
  }

  ${device.tabletLandscape} {
    gap: 20px;
  }

  ${device.desktop} {
    padding: 0 172px;
    gap: 16px;
  }

  ${device.ultraWide} {
    padding: 0 229px;
    gap: 20px;
  }
`;

export const TvChannelsTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 140%;
  opacity: 0.9;
  width: max-content;
  position: relative;

  &:after {
    content: url(${tickets});
    position: absolute;
    top: -25px;
    right: -38px;
  }

  ${device.tablet} {
    font-size: 30px;
  }

  ${device.tabletLandscape} {
    font-size: 36px;
  }

  ${device.desktop} {
    font-size: 40px;
  }

  ${device.ultraWide} {
    font-size: 52px;
  }
`;

export const TvChanneSublsTitle = styled.p`
  text-align: center;
  font-size: 15px;
  line-height: 150%;
  opacity: 0.7;

  ${device.tablet} {
    text-align: start;
    font-size: 16px;
    width: 510px;
  }

  ${device.tabletLandscape} {
    width: 626px;
  }

  ${device.ultraWide} {
    width: 840px;
    font-size: 20px;
  }
`;

export const ChannelsListWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  height: ${({isOpen}) => (isOpen === 'true' ? 'auto' : '240px')};
  overflow: hidden;

  ${device.mobile} {
    height: ${({isOpen}) => (isOpen === 'true' ? 'auto' : '274px')};
  }

  ${device.tablet} {
    height: ${({isOpen}) => (isOpen === 'true' ? 'auto' : '398px')};
  }

  ${device.tabletLandscape} {
    height: auto;
  }
`;

export const BtnWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;


  ${device.tablet} {
    padding-right: 40px;
  }

  ${device.tabletLandscape} {
    margin-top: 20px;
    padding-right: 48px;
  }

  ${device.desktop} {
    margin-top: 18px;
    padding-right: 172px;
  }

  ${device.ultraWide} {
    margin-top: 23px;
    padding-right: 229px;
  }
`;

export const ShowAllBtn = styled.button`
  display: flex;
  width: max-content;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-transform: uppercase;
  color: ${colors.fontPrimary};

  ${device.ultraWide} {
    font-size: 18px;
  }
`;

export const StyledArrow = styled(ArrowIcon)`
  path {
    stroke: ${colors.buttonPrimary};
  }

  ${ShowAllBtn}:hover & path {
    stroke: ${colors.fontPrimary};
  }

  rotate: ${({clicked}) => (clicked === 'true' ? '180deg' : '0deg')};;

`;
