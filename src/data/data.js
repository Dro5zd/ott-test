import {nanoid} from "nanoid";
import tvLogo1 from "../assets/images/channels/TV Logo 160x90 (1).png";
import tvLogo2 from "../assets/images/channels/TV Logo 160x90 (2).png";
import tvLogo3 from "../assets/images/channels/TV Logo 160x90 (3).png";
import tvLogo4 from "../assets/images/channels/TV Logo 160x90 (4).png";
import tvLogo5 from "../assets/images/channels/TV Logo 160x90 (5).png";
import tvLogo6 from "../assets/images/channels/TV Logo 160x90 (6).png";
import tvLogo7 from "../assets/images/channels/TV Logo 160x90 (7).png";
import tvLogo8 from "../assets/images/channels/TV Logo 160x90 (8).png";
import tvLogo9 from "../assets/images/channels/TV Logo 160x90 (9).png";
import tvLogo10 from "../assets/images/channels/TV Logo 160x90 (10).png";
import gift from "../assets/icons/gift.svg";
import device from "../assets/icons/device.svg";
import tv from "../assets/icons/tv.svg";
import planet from "../assets/icons/planet.svg";
import platformLogo1 from "../assets/icons/Samsung-logo.svg";
import platformLogo2 from "../assets/icons/apple-ios-logo.svg";
import platformLogo3 from "../assets/icons/Android_tv_logo.svg";
import platformLogo4 from "../assets/icons/LG-smart-logo.svg";

export const filters = [
    {
        id: nanoid(),
        title: 'Популярные',
        active: true
    },
    {
        id: nanoid(),
        title: 'Национальные',
        active: false
    },
    {
        id: nanoid(),
        title: 'Познавательные',
        active: false
    },
    {
        id: nanoid(),
        title: 'Кино',
        active: false
    },
    {
        id: nanoid(),
        title: 'Спорт',
        active: false
    },
    {
        id: nanoid(),
        title: 'Детске',
        active: false
    },
    {
        id: nanoid(),
        title: 'Музыкальные',
        active: false
    },
    {
        id: nanoid(),
        title: 'Новостные',
        active: false
    },
]

export const channels = [
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #FF6961 0%, #D70015 100%)',
        name: '1+1 logo',
        logo: tvLogo1
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #409CFF 0%, #0040DD 100%)',
        name: 'Zoom logo',
        logo: tvLogo2
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #30DB5B 0%, #248A3D 100%)',
        name: 'Ukraine logo',
        logo: tvLogo3
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #7D7AFF 0%, #3634A3 100%)',
        name: 'Enter logo',
        logo: tvLogo4
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #FFD426 0%, #B25000 100%)',
        name: 'TET logo',
        logo: tvLogo5
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #409CFF 0%, #0040DD 100%)',
        name: 'Inter logo',
        logo: tvLogo6
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #30DB5B 0%, #248A3D 100%)',
        name: 'Noviy logo',
        logo: tvLogo7
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #7D7AFF 0%, #3634A3 100%)',
        name: 'ICTV logo',
        logo: tvLogo8
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #30DB5B 0%, #248A3D 100%)',
        name: 'M1 logo',
        logo: tvLogo9
    },
    {
        id: nanoid(),
        color: 'linear-gradient(180deg, #7D7AFF 0%, #3634A3 100%)',
        name: '2+2 logo',
        logo: tvLogo10
    },
]

export const advantages = [
    {
        id: nanoid(),
        title: 'Более 250 каналов',
    },
    {
        id: nanoid(),
        title: 'Более 250 каналов',
    },
    {
        id: nanoid(),
        title: 'Режим Ultra TV Sport',
    },
    {
        id: nanoid(),
        title: 'Архив каналов',
    },
    {
        id: nanoid(),
        title: '5 устройств',
    },
]

export const features = [
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

export const platforms = [
    {
        id: nanoid(),
        name: 'Samsung Smart TV logo',
        logo: platformLogo1
    },
    {
        id: nanoid(),
        name: 'iOs logo',
        logo: platformLogo2
    },
    {
        id: nanoid(),
        name: 'AndroidTv logo',
        logo: platformLogo3
    },
    {
        id: nanoid(),
        name: 'LG Smart logo',
        logo: platformLogo4
    },

]

export const questions = [
    {
        id: nanoid(),
        question: 'Как подключить подписку OTTCLUB или продлить ее?',
        answer: 'Какая необходима скорость соединения для стабильного просмотра каналов? Какая необходима скорость соединения для стабильного просмотра каналов?'
    },
    {
        id: nanoid(),
        question: 'Как смотреть одновременно на разных устройствах?',
        answer: ''
    },
    {
        id: nanoid(),
        question: 'Какая скорость соединения необходима для просмотра каналов?',
        answer: ''
    },
    {
        id: nanoid(),
        question: 'Как смотреть на телевизоре Samsung?',
        answer: ''
    },
    {
        id: nanoid(),
        question: 'Как посмотреть передачу, которая была в эфире ранее?',
        answer: ''
    },
    {
        id: nanoid(),
        question: 'Как работает бесплатный тестовый период?',
        answer: ''
    },
]

