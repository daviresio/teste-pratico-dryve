import React from 'react';
import styled from "styled-components";
import {Column} from "../../../../styles/Flex";
import {ThemeInnerModel} from "../../../../models/theme.model";

const CarStatus = () => {
    return (
        <CarStatusContainer>
            <AguardandoPrecificacao>Aguardando precificação</AguardandoPrecificacao>
            <Time>18/04/2020 às 14:35</Time>
        </CarStatusContainer>
    );
};

export default CarStatus;

const CarStatusContainer = styled.div`
${Column};
align-items: center;
justify-content: center;
`

const Text = styled.div`
font-family: 'Inter', sans-serif;
text-align: center;
`

const AguardandoPrecificacao = styled(Text)`
font-size: 12px;
line-height: 1;
color: ${({theme}: ThemeInnerModel) => theme.text.primaryColor};
background-color: ${({theme}: ThemeInnerModel) => theme.colorBlueLight};
border-radius: 13px;
width: 176px;
height: 26px;
${Column};
justify-content: center;
margin-bottom: 18px;
`

const Time = styled(Text)`
font-size: 11px;
color: ${({theme}: ThemeInnerModel) => theme.text.lightColor};
`