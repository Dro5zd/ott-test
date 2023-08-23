import styled from "styled-components";
import {device} from "../../styles/mixins";
import {colors} from "../../styles/colors";
import {ReactComponent as DownIcon} from '../../assets/icons/down.svg';

export const StyledQuestionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;;

  ${device.tablet} {
    height: 318px;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${device.tabletLandscape} {
    height: 312px;
    gap: 27px;
  }

  ${device.desktop} {
    height: 494px;
    gap: 27px;
  }

  ${device.ultraWide} {
    height: 689px;
    gap: 32px;
  }
`;

export const QuestionsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    padding-bottom: 48px;
  }

  ${device.mobile} {
    &:last-child {
      padding-bottom: 87px;
    }
  }

  ${device.tablet} {
    width: 332px;


    &:nth-child(3n) {
      padding-bottom: 40px;
      border: none;
    }

    &:last-child {
      padding-bottom: 50px;
    }
  }

  ${device.tabletLandscape} {
    width: 427px;
    padding-bottom: 27px;

    &:nth-child(3n) {
      padding-bottom: 48px;
    }
  }

  ${device.desktop} {
    width: 467px;
    padding-bottom: 27px;

    &:nth-child(3n) {
      padding-bottom: 48px;
    }
  }

  ${device.ultraWide} {
    width: 625px;
    padding-bottom: 40px;

    &:nth-child(3n) {
      padding-bottom: 100px;
    }

  }
`;

export const QAWrapper = styled.div`
  ${device.desktop} {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ${device.ultraWide} {
    gap: 20px;
  }
`;

export const QuestionsListItemQuestion = styled.span`
  display: block;
  width: 228px;
  line-height: 140%;
  font-weight: 500;

  ${device.tablet} {
    font-size: 18px;
    line-height: 140%;
    width: 262px;
  }

  ${device.tabletLandscape} {
    font-size: 18px;
    line-height: 140%;
    width: 353px;
  }

  ${device.ultraWide} {
    font-size: 24px;
    line-height: 140%;
    width: 533px;
  }
`;

export const QuestionsListItemAnswer = styled.span`
  display: none;
  width: 228px;
  line-height: 140%;

  ${device.desktop} {
    display: block;
    font-size: 18px;
    line-height: 140%;
    width: 393px;
    opacity: 0.8;
  }

  ${device.tabletLandscape} {
    font-size: 18px;
    line-height: 150%;
    width: 353px;
  }

  ${device.ultraWide} {
    font-size: 20px;
  }
`;


export const QuestionsListItemBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;

  &:hover {
    border: 1px solid white;
    border-radius: 2px;
  }

  ${device.ultraWide} {
    font-size: 18px;
  }
`;

export const StyledDown = styled(DownIcon)`
  path {
    stroke: ${colors.fontPrimary};
  }

  rotate: ${({clicked}) => (clicked === 'true' ? '180deg' : '0deg')};;

`;
