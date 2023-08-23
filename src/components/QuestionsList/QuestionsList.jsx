import React, {useState} from 'react';
import {questions} from "../../data/data";
import {
    QAWrapper,
    QuestionsListItem, QuestionsListItemAnswer,
    QuestionsListItemBtn, QuestionsListItemQuestion,
    StyledDown,
    StyledQuestionsList
} from "./QuestionsList.styled";

export const QuestionsList = () => {
    const [clickedMap, setClickedMap] = useState({});

    const handleSVGClick = (id) => {
        setClickedMap(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };
    return (
        <StyledQuestionsList>
            {questions.map(({id, question, answer}) => <QuestionsListItem key={id}>
                <QAWrapper>
                    <QuestionsListItemQuestion>{question}</QuestionsListItemQuestion>
                    <QuestionsListItemAnswer>{answer}</QuestionsListItemAnswer>
                </QAWrapper>
                <QuestionsListItemBtn onClick={() => handleSVGClick(id)}>
                    <StyledDown clicked={clickedMap[id] ? 'true' : 'false'}/>
                </QuestionsListItemBtn>
            </QuestionsListItem>)}
        </StyledQuestionsList>
    );
};
