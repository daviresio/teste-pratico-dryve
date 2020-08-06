import React from 'react';
import styled from "styled-components";
import {DefaultBorder} from "../styles/Border";

const Input = (props: any) => {
    return (
        <InputStyled {...props} />
    );
};

export default Input;


const InputStyled = styled.input`
width: 100%;
height: 56px;
${DefaultBorder};
border-radius: 4px;
padding-left: 16px;
font-family: 'Roboto', sans-serif;
font-size: 16px;
line-height: 1.5;
letter-spacing: 0.15px;
color: rgba(0, 0, 0, 0.6);

&::placeholder {
opacity: .7;
}

&:disabled {
opacity: .5;
}

`
