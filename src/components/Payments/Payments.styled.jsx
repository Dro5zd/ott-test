import styled from "styled-components";
import {device} from "../../styles/mixins";

export const PaymentsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
  gap: 16px;

  ${device.mobile} {
    margin-top: 16px;
  }

  ${device.tablet} {
    margin-top: 30px;
    margin-bottom: 22px;
    justify-content: start;
  }

  ${device.tabletLandscape} {
    margin-top: 55px;
    margin-bottom: 20px;
  }

  ${device.ultraWide} {
    margin-top: 50px;
    margin-bottom: 35px;
  }
`;

export const PaymentsListItem = styled.li`
  height: 32px;
  
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

export const PaymentLogo = styled.img`
  height: 100%;
`;
