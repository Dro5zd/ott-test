import styled from 'styled-components';
import { device } from '../../styles/mixins';
import { colors } from '../../styles/colors';

export const StyledButton = styled.button`
  display: inline-flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  width: 288px;
  border-radius: 5px;
  background: ${colors.buttonPrimary};
  color: ${colors.fontPrimary};
  font-size: 15px;
  font-weight: 600;
  line-height: 140%;

  &:hover {
    background: ${colors.buttonSecondary};
    cursor: pointer;
  }

  ${device.mobile} {
    width: 343px;
    font-size: 17px;
    padding: 16px 24px;
  }

  ${device.tabletLandscape} {
    width: 368px;
    font-size: 18px;
    padding: 16px 28px;
  }

  ${device.desktop} {
    width: 411px;
    font-size: 20px;
    padding: 18px 32px;
  }

  ${device.ultraWide} {
    width: 530px;
    font-size: 26px;
    padding: 24px 40px;
  }
`;
