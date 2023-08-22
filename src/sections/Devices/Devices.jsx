import React from 'react';
import {DevicesContainer, DevicesImg, DevicesSublsTitle, DevicesTitle, DevicesTitleWrapper} from "./Devices.styled";
import devicesImg from '../../assets/images/devices-img.png';
import {Button} from "../../components/Button/Button";

export const Devices = () => {
    return (
        <DevicesContainer>
            <DevicesTitleWrapper>
                <DevicesTitle>Смотрите на разных устройствах</DevicesTitle>
                <DevicesSublsTitle>Подключайте подписку FULL и смотрите любимые каналы на 5 устройствах, среди которых:
                    телевизор, компьютер, планшет или смартфон</DevicesSublsTitle>
                <DevicesImg src={devicesImg} alt={'TV'}/>
                <Button title={'Протестировать 7 дней бесплатно'}/>
            </DevicesTitleWrapper>
        </DevicesContainer>
    );
};
