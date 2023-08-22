import styled from "styled-components";
import {device} from "../../styles/mixins";
import {colors} from "../../styles/colors";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
  width: 256px;
  margin-bottom: 65px;
  
  ${device.mobile} {
    width: 295px;
    margin-bottom: 114px;
  }
  
  ${device.tablet} {
    
    flex-direction: row;
    width: 526px;
    gap: 0;
    margin-bottom: 92px;
  }

  ${device.tabletLandscape} {
    width: 551px;
    margin-bottom: 122px;
    margin-top: 40px;
  }

  ${device.desktop} {
    width: 570px;
    margin-bottom: 136px;
  }

  ${device.ultraWide} {
    width: 728px;
    margin-bottom: 197px;
  }
`;

export const FormInput = styled.input`
  padding: 15px 16px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #D0D0D1;
  opacity: 0.9;
  
  &::placeholder{
    font-size: 15px;
    line-height: 23px; 
    letter-spacing: 0.15px;
    opacity: 0.9;
  }

  &:focus{
    outline: none;
  }
  
  ${device.tablet} {
  width: 300px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${device.ultraWide} {
    width: 400px;
  }
`;

export const FormButton = styled.button`
  display: inline-flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: ${colors.buttonSecondary};
  border: 1px solid ${colors.buttonSecondary};
  color: ${colors.fontPrimary};
  font-size: 15px;

  &:hover {
    background: ${colors.buttonPrimary};
    cursor: pointer;
  }

  &:active {
      // background: ${colors.buttonActive};
      // border: 3px solid ${colors.buttonActive};
      // color: ${colors.background};
  }

  ${device.mobile} {
    font-size: 18px;
  }


  ${device.tablet} {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 226px;
    padding: 16px 32px;
    font-size: 17px;
  }

  ${device.tabletLandscape} {
    padding: 16px 40px;
    width: 250px;
    font-size: 18px;
  }

  ${device.desktop} {
    width: 270px;
    font-size: 20px;
  }

  ${device.ultraWide} {
    width: 328px;
    padding: 20px 50px;
    font-size: 24px;
  }
`;
