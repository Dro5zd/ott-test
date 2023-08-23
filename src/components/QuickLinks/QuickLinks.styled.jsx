import styled from "styled-components";
import {device} from "../../styles/mixins";

export const QuickLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  ${device.mobile} {
    height: 126px;
    flex-wrap: wrap;
  }

  ${device.tablet} {
    width: 324px;
  }

  ${device.tabletLandscape} {
    width: 422px;
  }

  ${device.ultraWide} {
    height: 180px;
    width: 574px;
  }
`;

export const QuickLinksListItem = styled.li`
  font-size: 14px;
  opacity: 0.8;

  ${device.mobile} {
    width: 156px;

    &:nth-child(n + 5) {
      margin-left: auto;
    }
  }

  ${device.ultraWide} {
    width: 217px;
  }
`;

export const QuickLinksLink = styled.a`
  font-size: 14px;

  ${device.ultraWide} {
    font-size: 18px;
  }
`;
