import React from 'react';
import Car from "../../../../models/car.model";
import styled from "styled-components";
import {LightText} from "../../../../styles/Typography";
import {formatValue} from "../../../../util/format_util";
import {ThemeInnerModel} from "../../../../models/theme.model";
import SimpleColumn from "../../../../components/SimpleColumn";

const CarValue: React.FC<Car> = ({adSellingPrice}) => {
    return (
        <SimpleColumn>
            <Title>ANÚNCIO</Title>
            <AnnounceValue>{`R$ ${formatValue(adSellingPrice)}`}</AnnounceValue>
            <Title>MÍNIMO ACEITO</Title>
            <MinimumAcceptValue>{`R$ ${formatValue(adSellingPrice)}`}</MinimumAcceptValue>
        </SimpleColumn>
    );
};

export default CarValue;

const Title = styled.span`
font-size: 10px;
${LightText};
`

const AnnounceValue = styled.span`
margin: 4px 0 6px;
font-size: 12px;
font-weight: bold;
line-height: 1;
color: ${({theme}: ThemeInnerModel) => theme.text.darkColor};
`

const MinimumAcceptValue = styled.span`
${LightText};
letter-spacing: normal;
color: ${({theme}: ThemeInnerModel) => theme.text.lightColor};
margin-top: 4px;
font-size: 12px;
`
