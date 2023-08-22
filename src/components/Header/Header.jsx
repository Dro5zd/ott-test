import React from 'react';
import {
    Logo,
    AuthBtn,
    SocialLogo,
    AuthBtnWrapper,
    StyledHeader,
    LogoLink,
    SocialList, SocialListItem, SocialLink
} from "./Header.styled";
import logo from '../../assets/icons/main-logo.png';
import facebook from '../../assets/icons/fb.svg';
import telegram from '../../assets/icons/telegram.svg';

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <LogoLink href={"/"}>
                    <Logo src={logo} alt={'Main logo'}/>
                </LogoLink>
                <AuthBtnWrapper>
                    <SocialList>
                        <SocialListItem>
                            <SocialLink href={"https://www.facebook.com"} target="_blank">
                                <SocialLogo src={facebook} alt={"Facebook logo"}/>
                            </SocialLink>
                        </SocialListItem>
                        <SocialListItem>
                            <SocialLink href={"https://web.telegram.org"} target="_blank">
                                <SocialLogo src={telegram} alt={"Telegram logo"}/>
                            </SocialLink>
                        </SocialListItem>
                    </SocialList>
                    <AuthBtn type='register'>Регистрация</AuthBtn>
                    <AuthBtn type='login'>Войти</AuthBtn>
                </AuthBtnWrapper>
            </StyledHeader>
        </>
    );
};
