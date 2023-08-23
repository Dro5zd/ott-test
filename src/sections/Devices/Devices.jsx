import React from 'react';
import {
    DevicesContainer,
    DevicesImg,
    DevicesImgTablet,
    DevicesSublsTitle,
    DevicesTitle,
    DevicesTitleWrapper
} from "./Devices.styled";
import devicesImg from '../../assets/images/devices-img.png';
import devicesImgTablet from '../../assets/images/device-tablet.png';
import {Button} from "../../components/Button/Button";
import {Platforms} from "../../components/Platforms/Platforms";

export const Devices = () => {
    return (
        <DevicesContainer>
            <DevicesTitleWrapper>
                <DevicesTitle>Смотрите на разных устройствах</DevicesTitle>
                <DevicesSublsTitle>Подключайте подписку FULL и смотрите любимые каналы на 5 устройствах, среди которых:
                    телевизор, компьютер, планшет или смартфон</DevicesSublsTitle>
                <DevicesImg src={devicesImg} alt={'Devices Image'}/>
                <DevicesImgTablet src={devicesImgTablet} alt={'Devices Image'}/>
                <Button title={'Протестировать 7 дней бесплатно'}/>
            </DevicesTitleWrapper>
            <Platforms/>
        </DevicesContainer>
    );
};
