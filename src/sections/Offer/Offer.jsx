import React from 'react';
import {LeftSide, OfferContainer, OfferImg, OfferPrice, OfferPriceWrapper, OfferTitle} from "./Offer.styled";

import eye from '../../assets/images/eye.png';
import {Advantages} from "../../components/Advantages/Advantages";
import {Form} from "../../components/Form/Form";

export const Offer = () => {
    return (
        <OfferContainer>
            <OfferImg src={eye} alt={'Eye Icon'}/>
            <LeftSide>
                <OfferPriceWrapper>
                    <OfferPrice>
                        / МЕСЯЦ
                    </OfferPrice>
                    <OfferTitle>Покупая подписку более, чем на 6 месяцев</OfferTitle>
                </OfferPriceWrapper>
                <Advantages/>
            </LeftSide>
            <Form/>
        </OfferContainer>
    );
};
