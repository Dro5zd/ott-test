import styled from "styled-components";
import {device} from "../../styles/mixins";
import {colors} from "../../styles/colors";

export const FilterList = styled.ul`
  margin: 24px 0;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  ${device.mobile} {
    margin-top: 32px;
    gap: 16px;
  }

  ${device.tablet} {
    margin-bottom: 40px;
    padding: 0 40px;
    gap: 24px;
  }

  ${device.tabletLandscape} {
    margin-top: 34px;
    padding: 0 48px;
  }

  ${device.desktop} {
    padding: 0 172px;
    gap: 18px;
  }

  ${device.ultraWide} {
    margin-top: 50px;
    padding: 0 229px;
    gap: 34px;
    margin-bottom: 52px;
  }
`;

export const FilterListItem = styled.li`
 
`;

export const FilterButton = styled.button`
  display: flex;
  padding: 8px 16px 9px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid ${({active}) => (active === true ? 'red' : 'rgba(255, 255, 255, 0.80)')};;
  background: ${({active}) => (active === true ? 'red' : 'transparent')};
 color: ${colors.fontPrimary};
  font-size: ${({active}) => (active === true ? '16px' : '15px')};
  font-weight: ${({active}) => (active === true ? '500' : '400')};
  line-height: 150%;

  ${device.mobile} {
    font-size: 16px;
  }
  ${device.tablet} {
    font-size: 16px;
    padding: 12px 18px;
  }

  ${device.tabletLandscape} {
    font-size: 18px;
    
  }

  ${device.desktop} {
    font-size: 16px;
    //margin-bottom: 20px;
  } 
  
  ${device.ultraWide} {
    font-size: 20px;
    padding: 16px 24px;
    //margin-bottom: 50px;
  }
`;
