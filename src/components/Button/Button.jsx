import React from 'react';
import {StyledButton} from './Button.styled';

export const Button = ({title}) => {
    return (
        <>
            <StyledButton>{title}</StyledButton>
        </>
    );
};
