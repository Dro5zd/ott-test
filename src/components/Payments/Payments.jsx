import React from 'react';
import {PaymentLogo, PaymentsList, PaymentsListItem} from "./Payments.styled";
import {payments} from "../../data/data";

export const Payments = () => {
    return (
        <PaymentsList>
            {payments.map(({id, logo, name}) => <PaymentsListItem key={id}>
                <PaymentLogo src={logo} alt={name}/>
            </PaymentsListItem>)}
        </PaymentsList>
    );
};
