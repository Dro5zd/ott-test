import styled from "styled-components";
import {device} from "../../styles/mixins";

export const PlatformsList = styled.ul`
  padding: 10px 16px 27px 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: center ;
  justify-content: center;
  gap: 24px;

  ${device.mobile} {
    padding: 12px 16px;
  }  
  
  ${device.tablet} {
    width: 100%;
    padding: 28px 40px;
    justify-content: space-between;
   }

  ${device.tabletLandscape} {
    padding: 48px;
  }

  ${device.desktop} {
    padding: 47px 172px;
  }

  ${device.ultraWide} {
    padding: 80px 229px;
  }
`;

export const PlatformListItem = styled.li`
  height: 20px;
  
  ${device.mobile} {
    height: 25px;
  }

  ${device.tablet} {
    height: 22px;
  }
  
  ${device.tabletLandscape} {
    height: 30px;
  }

  ${device.ultraWide} {
    height: 46px;
  }
`;

export const PlatformLogo = styled.img`
  height: 100%;
`;
