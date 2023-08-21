import React from 'react';
import {Logo, AuthBtn, NavWrapper, SocialLogo, SocialWrapper, AuthBtnWrapper} from "./Nav.styled";
import logo from '../../assets/icons/main-logo.png';
import facebook from '../../assets/icons/fb.svg';
import telegram from '../../assets/icons/telegram.svg';

export const Nav = () => {
    return (
        <>
            <NavWrapper>
                <Logo src={logo} alt={'Main logo'}/>
                <AuthBtnWrapper>
                    <SocialWrapper>
                        <SocialLogo src={facebook} alt={"Facebook logo"}/>
                        <SocialLogo src={telegram} alt={"Telegram logo"}/>
                    </SocialWrapper>
                    <AuthBtn type='register'>Регистрация</AuthBtn>
                    <AuthBtn type='login'>Войти</AuthBtn>
                </AuthBtnWrapper>
            </NavWrapper>
        </>
    );
};
