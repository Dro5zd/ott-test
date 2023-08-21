import styled from 'styled-components';
import {device} from '../../styles/mixins';
import {colors} from "../../styles/colors";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  ${device.mobile} {
    padding: 44px 16px 16px 16px;
  }

  ${device.tablet} {
    padding: 23px 40px;
  }

  ${device.tabletLandscape} {
    padding: 23px 48px;
  }

  ${device.desktop} {
    padding: 23px 172px;
  }

  ${device.ultraWide} {
    padding: 30px 229px;
  }
`;

export const Logo = styled.img`
  width: 56px;

  ${device.tablet} {
    width: 64px;
  }

  ${device.tabletLandscape} {
    width: 72px;
  }

  ${device.ultraWide} {
    width: 96px;
  }
`;

export const SocialWrapper = styled.div`
  display: none;
  gap: 24px;
  margin-right: 16px;

  ${device.tablet} {
    display: flex;
  }

  ${device.ultraWide} {
    gap: 16px;
  }
`;


export const SocialLogo = styled.img`
  width: 24px;
`;

export const AuthBtnWrapper = styled.div`
  display: flex;
`;

export const AuthBtn = styled.button`
  display: ${(props) => (props.type === 'register' ? `none` : 'block')};
  padding: 9px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${(props) => (props.type === 'login' ? `2px solid ${colors.fontPrimary}` : 'none')};
  font-weight: 500;
  color: ${colors.fontPrimary};
  cursor: pointer;

  ${device.tablet} {
    display: block;
    padding: 11px 24px;
  }

  ${device.ultraWide} {
    padding: 16px 32px;
    font-size: 20px;
  }
`;
