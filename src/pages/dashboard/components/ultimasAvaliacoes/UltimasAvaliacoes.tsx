import React from 'react';
import styled from "styled-components";
import Card from "../../../../components/Card";
import {Row} from "../../../../styles/Flex";
import {ThemeInnerModel} from "../../../../models/theme.model";
import IconDropDown from '../../../../assets/ic-arrow-drop-down.svg'
import Divider from "../../../../components/Divider";
import Car from "../../../../models/car.model";
import {useSelector} from "react-redux";
import State from "../../../../models/state.model";
import ItemRow from "./ItemRow";
import ItemGrid from "./ItemGrid";
import {BoldText} from "../../../../styles/Typography";
import ArrowRight from '../../../../assets/ic-arrow-right.svg'
import SimpleRow from "../../../../components/SimpleRow";

const UltimasAvaliacoes: React.FC = () => {

    const cars = useSelector((state: State) => state.car.cars)

    return (
        <Container>
            <TopHeader>
                <TopHeaderText>Últimas avaliações</TopHeaderText>
                <SimpleRow>
                    <TopHeaderText>Hoje</TopHeaderText>
                    <img src={IconDropDown} alt={'dropdown icon'}/>
                </SimpleRow>
            </TopHeader>
            <ItemGrid>
                <HeaderText>Dados do veículo</HeaderText>
                <HeaderText>Valor</HeaderText>
                <HeaderText>Status</HeaderText>
            </ItemGrid>
            <Divider/>
            {
                cars.map((car: Car, index: number) => {
                    return (
                        <ItemRow key={car.versionUuid} car={car} isLastChild={index === cars.length - 1}/>
                    )
                })
            }
            <Bottom>
                <VerTudo>Ver tudo</VerTudo>
                <Img src={ArrowRight} alt={'arrow right'}/>
            </Bottom>
        </Container>
    );
};

export default UltimasAvaliacoes;

const Container = styled(Card)`
max-height: 640px;
overflow: auto;
&::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}
&::-webkit-scrollbar-thumb {
  width: 6px;
  border-radius: 4px;
  background-color: ${({theme}: ThemeInnerModel) => theme.colorWhite};
}
`

const TopHeader = styled.div`
${Row};
justify-content: space-between;
margin: 18px 27px 20px 20px;
`

const TopHeaderText = styled.span`
${BoldText};
`

const HeaderText = styled.span`
opacity: 0.5;
font-family: 'Inter', sans-serif;
color: ${({theme}: ThemeInnerModel) => theme.text.black};
font-size: 10px;
font-weight: 500;
line-height: 1.6;
letter-spacing: 1.5px;
text-transform: uppercase;
`

const Bottom = styled.div`
${Row};
justify-content: flex-end;
padding: 6px 16px 7px 0;
`

const VerTudo = styled.span`
${BoldText};
color: ${({theme}: ThemeInnerModel) => theme.colorBlue};
`

const Img = styled.img`
margin-top: 3px;
`