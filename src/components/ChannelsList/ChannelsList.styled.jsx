import styled from "styled-components";
import {device} from "../../styles/mixins";

export const StyledChannelsList = styled.ul`
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  ${device.tablet} {
    padding: 0 40px;
    gap: 24px;
  }
  
  ${device.tabletLandscape} {
    padding: 0 48px;
    gap: 24px;
  }

  ${device.desktop} {
    padding: 0 172px;
    gap: 32px;
    justify-content: space-between;
  }
  
  ${device.ultraWide} {
    padding: 0 229px;
    gap: 50px;
  }
`;

export const ChannelListItem = styled.li`
  display: inline-block;
  cursor: pointer;
  
  border-radius: 5px;
  padding: 11px;
  border: 1px solid #C6C6C8;
  background: ${({color}) => (color)};

  ${device.mobile} {
    border-radius: 8px;
    padding: 14px;
  }

  ${device.tablet} {
    
    padding: 21px;
    margin-bottom: 8px;
  }

  ${device.desktop} {
    
    padding: 24px;
  }
  
  ${device.ultraWide} {
    border-radius: 9px;
    padding: 32px;
  }
`;

export const ChannelLogo = styled.img`
  display: block;
  width: 61px;

  ${device.mobile} {
    width: 73px;
  }

  ${device.tablet} {
    width: 110px;
  }
  ${device.tabletLandscape} {
    width: 115px;
  }

  ${device.desktop} {
    width: 131px;
  }
  
  ${device.ultraWide} {
    width: 174px;
  }
`;
