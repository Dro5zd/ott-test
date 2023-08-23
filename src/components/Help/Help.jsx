import React from 'react';
import {
    ContactsLink,
    ContactsList,
    ContactsListItem,
    HelpContactsWrapper,
    HelpTitle, HelpWrapper,
    SocialFooterLink,
    SocialFooterListItem,
    SocialFooterlList,
    SocialFooterLogo,
    SupportTitle,
    SupportWrapper,
} from "./Help.styled";
import whatsApp from '../../assets/icons/whatsapp.svg';
import telegram from '../../assets/icons/telegram-color.svg';

export const Help = () => {
    return (
        <HelpWrapper>
            <HelpContactsWrapper>
                <HelpTitle>Помощь</HelpTitle>
                <ContactsList>
                    <ContactsListItem>
                        <ContactsLink href="tel:+442045772169">
                            +442045772169 (Англия)
                        </ContactsLink>
                    </ContactsListItem>
                    <ContactsListItem>
                        <ContactsLink href="tel:+420255708953">
                            +420255708953 (Европа)
                        </ContactsLink>
                    </ContactsListItem>
                    <ContactsListItem>
                        <ContactsLink href="tel:+97233751723">
                            +97233751723 (Израиль)
                        </ContactsLink>
                    </ContactsListItem>
                    <ContactsListItem>
                        <ContactsLink href="mailto:support@ottclub.cc">
                            support@ottclub.cc
                        </ContactsLink>
                    </ContactsListItem>
                </ContactsList>
            </HelpContactsWrapper>

            <SupportWrapper>
                <SupportTitle>Чат-поддержка</SupportTitle>
                <SocialFooterlList>
                    <SocialFooterListItem>
                        <SocialFooterLink href={"https://www.whatsapp.com"} target="_blank">
                            <SocialFooterLogo src={whatsApp} alt={"Whatsapp logo"}/>
                        </SocialFooterLink>
                    </SocialFooterListItem>
                    <SocialFooterListItem>
                        <SocialFooterLink href={"https://web.telegram.org"} target="_blank">
                            <SocialFooterLogo src={telegram} alt={"Telegram logo"}/>
                        </SocialFooterLink>
                    </SocialFooterListItem>
                </SocialFooterlList>
            </SupportWrapper>
        </HelpWrapper>
    );
};
