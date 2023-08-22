import React from 'react';
import {OfferList, OfferListItem} from "./Advantages.styled";
import {nanoid} from "nanoid";

const data = [
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

export const Advantages = () => {
    return (
        <OfferList>
            {data.map(adv => <OfferListItem key={adv.id}>{adv.title}</OfferListItem>)}
        </OfferList>
    );
};
