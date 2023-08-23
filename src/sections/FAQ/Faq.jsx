import React from 'react';
import {FaqTitle} from "./Faq.styled";
import {Container} from "../../components/Container/Container";
import {QuestionsList} from "../../components/QuestionsList/QuestionsList";

export const Faq = () => {
    return (
        <Container>
            <FaqTitle>Популярные вопросы</FaqTitle>
            <QuestionsList/>
        </Container>
    );
};
