import React from 'react';
import {QuickLinks} from "../../components/QuickLinks/QuickLinks";
import {Help} from "../../components/Help/Help";
import {FooterContainer, FooterSubTitle, FooterTitle, FooterTitleWrapper, InfoWrapper} from "./Footer.styled";
import {Payments} from "../../components/Payments/Payments";

export const Footer = () => {
    return (
        <FooterContainer>
            <InfoWrapper>
                <QuickLinks/>
                <Help/>
            </InfoWrapper>
            <Payments/>
            <FooterTitleWrapper>
                <FooterTitle>2021-2022 COMPANY NAME LTD</FooterTitle>
                <FooterSubTitle>Company number 1221514</FooterSubTitle>
            </FooterTitleWrapper>
        </FooterContainer>
    );
};
