import React from 'react';
import { HeroContainer, HeroImg, HeroSubTitle, HeroTitle} from "./Hero.styled";
import {Button} from "../../components/Button/Button";
import heroImg from '../../assets/images/hero-picture.png';
import {Features} from "../../components/Features/Features";

export const Hero = () => {
    return (
        <>
            <HeroContainer>
                <HeroTitle>Более 270 телеканалов в прямом эфире</HeroTitle>
                <HeroImg src={heroImg} alt={'Woman on TV'}/>
                <HeroSubTitle>Национальные, познавательные, детские, кино, спортивные, новостные и многие другие
                    каналы</HeroSubTitle>
                <Button title={'Протестировать 7 дней бесплатно'}/>
                <Features/>
            </HeroContainer>
        </>
    );
};
