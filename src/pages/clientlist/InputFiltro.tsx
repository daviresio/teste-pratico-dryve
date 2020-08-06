import React from 'react';
import styled from "styled-components";
import IconSearch from '../../assets/ic-search.svg'
import {DefaultBorder} from "../../styles/Border";

const InputFiltro = () => {
    return (
        <InputContainer>
            <Input placeholder={'Buscar por nome...'}/>
            <Icon src={IconSearch}/>
        </InputContainer>
    );
};

export default InputFiltro;

const InputContainer = styled.div`
position: relative;
display: inline-block;
width: 372px;
height: 36px;
`

const Input = styled.input`
width: 100%;
height: 100%;
padding: 0 16px;
font-size: 14px;
font-weight: 500;
line-height: 1.71;
letter-spacing: 0.1px;
color: rgba(0, 0, 0, 0.6);
${DefaultBorder};
border-radius: 4px;
`

const Icon = styled.img`
position: absolute;
top: 50%;
transform: translateY(-50%);
right: 16px;
width: 17px;
height: 17px;
`
