import styled from "styled-components";
import {device} from "../../styles/mixins";
import frame from '../../assets/icons/offer-frame.svg';
import frameM from '../../assets/icons/offer-frame-m.svg';
import frameT from '../../assets/icons/offer-frame-t.svg';
import frameTV from '../../assets/icons/offer-frame-tv.svg';
import frameD from '../../assets/icons/offer-frame-d.svg';
import frameU from '../../assets/icons/offer-frame-u.svg';
import {colors} from "../../styles/colors";

export const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${`url(${frame})`} no-repeat center top;
  margin-top: 20px;
  padding-top: 18px;

  ${device.mobile} {
    margin-top: 16px;
    background: ${`url(${frameM})`} no-repeat center top;
  }

  ${device.tablet} {
    margin-top: 32px;
    background: ${`url(${frameT})`} no-repeat center top;
  }

  ${device.tabletLandscape} {
    margin-top: 48px;
    background: ${`url(${frameTV})`} no-repeat center top;
    padding-top: 20px;
  }

  ${device.desktop} {
    background: ${`url(${frameD})`} no-repeat center top;
  }

  ${device.ultraWide} {
    padding-top: 28px;
    margin-top: 60px;
    background: ${`url(${frameU})`} no-repeat center top;
  }
`;

export const LeftSide = styled.div`
  
  
  ${device.tablet} {
    width: 526px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${device.tabletLandscape} {
    width: 551px;
    padding: 0 16px;
  }

  ${device.desktop} {
    width: 570px;
    padding: 0 20px 0 0;
  }

  ${device.ultraWide} {
    width: 728px;
  }
`;

export const OfferImg = styled.img`
  width: 40px;
  margin-bottom: 17px;

  ${device.mobile} {
    width: 44px;
    margin-bottom: 25px;
  }

  ${device.tablet} {
    width: 46px;
    margin-bottom: 25px;
  }

  ${device.tabletLandscape} {
    width: 50px;
    margin-bottom: 30px;
  }

  ${device.desktop} {
    width: 54px;
    margin-bottom: 24px;
  }
  
  ${device.ultraWide} {
    width: 72px;
    margin-bottom: 32px;
  }
`;

export const OfferPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  ${device.ultraWide} {
    gap: 16px;
  }
`;
export const OfferPrice = styled.span`
  
  &:before {
    content: '1€';
    color: ${colors.buttonSecondary};
    font-size: 67px;
    font-weight: 600;
    line-height: 67px;
    margin-right: 7px;
  }
`;

export const OfferTitle = styled.span`
  width: 200px;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
  line-height: 140%;
  opacity: 0.8;

  ${device.mobile} {
    font-size: 16px;
  }

  ${device.ultraWide} {
    width: 245px;
    font-size: 20px;
  }
`;




