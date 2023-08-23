import styled from "styled-components";
import {device} from "../../styles/mixins";
import Ellipse from "../../assets/icons/ellipse.svg";
import Copyright from "../../assets/icons/copyright.svg";
import treeM from "../../assets/images/tree-pumpkins-bg-m.png";
import treeTL from "../../assets/images/tree-pumpkins-bg-tl.png";
import treeU from "../../assets/images/tree-pumpkins-bg-u.png";
import footerBGM from "../../assets/images/footer-bg-m.png";
import footerBGTL from "../../assets/images/footer-bg-tl.png";
import footerBGU from "../../assets/images/footer-bg-u.png";

export const FooterBg = styled.div`
  background: ${`url(${treeM})`} no-repeat bottom, ${`url(${footerBGM})`} no-repeat bottom;
  width: 100%;
  background-size: 100%;
  
  ${device.tablet} {
    background: ${`url(${treeTL})`} no-repeat bottom, ${`url(${footerBGTL})`} no-repeat bottom;
    background-size: 100%;
  }

  ${device.desktop} {
    background: ${`url(${treeU})`} no-repeat -20px bottom, ${`url(${footerBGU})`} no-repeat bottom;
    background-size: 100%;
  }
`;
export const FooterContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 48px 16px 14px 16px;

  ${device.mobile} {
    padding: 64px 16px 16px 16px;
  }
  
  ${device.tablet} {
    padding: 64px 40px 14px 40px;
  }

  ${device.tabletLandscape} {
    padding: 64px 48px 14px 48px;
  }

  ${device.desktop} {
    padding: 64px 172px 14px 172px;
  }

  ${device.ultraWide} {
    padding: 90px 229px 20px 229px;
  }
`;

export const InfoWrapper = styled.div`
  ${device.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const FooterTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  
  ${device.tablet} {
    flex-direction: row;
    justify-content: end;
  }
`;
export const FooterTitle = styled.span`
  position: relative;
  &:before{
    content: url(${Copyright});
    position: absolute;
    top: 2px;
    left: -14px;
  }
  
  margin-left: 14px;
  width: 186px;
  font-size: 11px;
  line-height: 140%;
  text-transform: uppercase;

  ${device.tablet} {
    width: auto;
  }
`;

export const FooterSubTitle = styled.span`
 
  margin-right: 14px;
  text-align: center;
  width: 186px;
  font-size: 11px;
  line-height: 140%;
  ${device.tablet} {
    width: auto;
    position: relative;
    margin-right: 0;
    margin-left: 20px;
    &:before{
      content: url(${Ellipse});
      position: absolute;
      top: -2px;
      left: -14px;
    }
  }
`;
