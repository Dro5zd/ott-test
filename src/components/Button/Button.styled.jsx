import styled from 'styled-components';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: ${colors.buttonPrimary};
  color: ${colors.fontPrimary};
  margin: 0 16px 16px;
  font-size: 15px;

  &:hover {
    background: ${colors.buttonSecondary};
    cursor: pointer;
  }

  &:active {
      // background: ${colors.buttonActive};
      // border: 3px solid ${colors.buttonActive};
      // color: ${colors.background};
  }

  ${device.mobile} {
    width: 295px;
    margin: 0 16px 24px;
    font-size: 17px;
    padding: 16px 24px;
  }

  ${device.tablet} {
    width: 343px;
    margin-bottom: 57px;
    margin-left: 0;
  }

  ${device.tabletLandscape} {
    width: 368px;
    margin-bottom: 75px;
    font-size: 18px;
    padding: 16px 28px;
  }

  ${device.desktop} {
    width: 411px;
    margin-bottom: 159px;
    font-size: 20px;
    padding: 18px 32px;
  }

  ${device.ultraWide} {
    width: 530px;
    margin-bottom: 194px;
    font-size: 26px;
    padding: 24px 40px;
  }
`;
