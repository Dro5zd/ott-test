import React from 'react';
import {
    FeatureImg,
    FeatureItem, FeaturesList, FeatureSubTitle, FeatureTitle,
} from './Fetures.styled';
import gift from '../../assets/icons/gift.svg';
import device from '../../assets/icons/device.svg';
import tv from '../../assets/icons/tv.svg';
import planet from '../../assets/icons/planet.svg';
import {nanoid} from "nanoid";

const features = [
    {
        id: nanoid(),
        img: gift,
        title: 'Бесплатный тест',
        subTitle: '7 дней бесплатного тестового просмотра',
    },
    {
        id: nanoid(),
        img: device,
        title: '5 устройств = 1 подписка',
        subTitle: 'Подключайте 5 устройств в одной подписке',
    },
    {
        id: nanoid(),
        img: tv,
        title: 'Архив трансляций',
        subTitle: 'Смотрите 7 дней телеэфира в записи',
    },
    {
        id: nanoid(),
        img: planet,
        title: 'Без привязки к месту',
        subTitle: 'Смотрите любимые фильмы и передачи в любой точке мира',
    },
];

export const Features = () => {

    return (
        <FeaturesList>
            {features.map(p => {
                return (
                    <FeatureItem key={p.id}>
                        <FeatureImg src={p.img} alt=""/>
                        <FeatureTitle>{p.title}</FeatureTitle>
                        <FeatureSubTitle>{p.subTitle}</FeatureSubTitle>
                    </FeatureItem>
                )
            })}
        </FeaturesList>
    );
};
