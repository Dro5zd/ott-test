import styled from "styled-components";
import {device} from "../../styles/mixins";

export const HelpWrapper = styled.div`

  ${device.mobile} {
   display: flex;
    justify-content: space-between;
  }
  
  ${device.tablet} {
   flex-direction: column;
  }
`;

export const HelpContactsWrapper = styled.div`
  width: 176px;
  margin-bottom: 16px;

  ${device.tablet} {
    margin-bottom: 0;
  }

  ${device.ultraWide} {
    width: 227px;
  }
`;

export const HelpTitle = styled.h4`
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 18px;
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${device.ultraWide} {
    gap: 10px;
  }
`;

export const ContactsListItem = styled.li`
  font-size: 14px;
  opacity: 0.8;

  ${device.ultraWide} {
    font-size: 18px;
  }
`;

export const ContactsLink = styled.a`
  
`;

export const SupportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 111px;
  gap: 8px;

  ${device.mobile} {
    margin-top: 40px;
    align-items: end;
  }

  ${device.tablet} {
    align-items: start;
    margin-top: 32px;
  }

  ${device.ultraWide} {
    gap: 20px;
  }
`;

export const SupportTitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
  
  ${device.ultraWide} {
    font-size: 18px;
  }
`;

export const SocialFooterlList = styled.ul`
  display: flex;
  gap: 16px;
  margin-right: 16px;
  
  ${device.mobile} {
    margin-right: 0;
  }

  ${device.tablet} {
    display: flex;
  }

  ${device.ultraWide} {
    gap: 16px;
  }
`;
export const SocialFooterListItem = styled.li`
  display: flex;
  align-items: center;
  ${device.tablet} {
  }

  ${device.ultraWide} {
  }
`;

export const SocialFooterLink = styled.a`
  
`;

export const SocialFooterLogo = styled.img`
  width: 24px;
`;
