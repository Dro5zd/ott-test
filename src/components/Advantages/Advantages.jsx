import React from 'react';
import {OfferList, OfferListItem} from "./Advantages.styled";
import {advantages} from "../../data/data";

export const Advantages = () => {
    return (
        <OfferList>
            {advantages.map(({id, title}) => <OfferListItem key={id}>{title}</OfferListItem>)}
        </OfferList>
    );
};
