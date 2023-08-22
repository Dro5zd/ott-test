import React, {useState} from 'react';
import {FormButton, FormInput, StyledForm} from "./Form.styled";

export const Form = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted, ${email}`);
        setEmail('')
    }
    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <FormInput type={"email"} onChange={handleInputChange} placeholder={'Email'} value={email}></FormInput>
            <FormButton type={'submit'}>Подключить тариф</FormButton>
        </StyledForm>
    );

}
