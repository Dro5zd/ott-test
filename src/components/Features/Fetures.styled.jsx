import styled from 'styled-components';
import {device} from '../../styles/mixins';
import {colors} from '../../styles/colors';

export const FeaturesList = styled.ul`
  display: none;

  ${device.tablet} {
    width: 100%;
    gap: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 40px 41px 0;
  }

  ${device.tabletLandscape} {
    padding: 32px 48px 32px 0;
    align-items: flex-start;
  }

  ${device.desktop} {
    //gap: 32px;
    padding: 48px 172px 56px 0;
  }

  ${device.ultraWide} {
    padding: 60px 228px 80px 0;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 154px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;

  ${device.tabletLandscape} {
    width: 205px;
    padding: 0;
    align-items: flex-start;
  }

  ${device.desktop} {
    width: 250px;
  }

  ${device.ultraWide} {
    width: 342px;
  }
`;

export const FeatureImg = styled.img`
  width: 41px;
  margin-bottom: 12px;

  ${device.tabletLandscape} {
    margin-bottom: 20px;
    width: 64px;
  }

  ${device.desktop} {
    width: 72px;
    margin-bottom: 24px;
  }

  ${device.ultraWide} {
    width: 96px;
    margin-bottom: 32px;
  }
`;

export const FeatureTitle = styled.span`
  text-align: center;
  font-weight: 600;
  line-height: 24px;
  color: ${colors.fontPrimary};
  

  ${device.tabletLandscape} {
    margin-bottom: 16px;
    line-height: 18px;
  }

  ${device.desktop} {
    font-size: 18px;
    margin-bottom: 12px;
  }

  ${device.ultraWide} {
    font-size: 24px;
    margin-bottom: 16px;
    line-height: 24px;
  }
`;

export const FeatureSubTitle = styled.span`
  display: none;

  ${device.tabletLandscape} {
    display: block;
    padding: 0 17px 0 0;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: ${colors.fontPrimary};
    opacity: 0.8;
  }

  ${device.ultraWide} {
    font-size: 20px;
  }
`;
