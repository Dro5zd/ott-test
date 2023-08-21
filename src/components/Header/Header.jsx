import React from 'react';
import {Logo, AuthBtn, SocialLogo, SocialWrapper, AuthBtnWrapper, StyledHeader} from "./Header.styled";
import logo from '../../assets/icons/main-logo.png';
import facebook from '../../assets/icons/fb.svg';
import telegram from '../../assets/icons/telegram.svg';

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <Logo src={logo} alt={'Main logo'}/>
                <AuthBtnWrapper>
                    <SocialWrapper>
                        <SocialLogo src={facebook} alt={"Facebook logo"}/>
                        <SocialLogo src={telegram} alt={"Telegram logo"}/>
                    </SocialWrapper>
                    <AuthBtn type='register'>Регистрация</AuthBtn>
                    <AuthBtn type='login'>Войти</AuthBtn>
                </AuthBtnWrapper>
            </StyledHeader>
        </>
    );
};
