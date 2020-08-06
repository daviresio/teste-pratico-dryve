import React from 'react';
import styled from "styled-components";
import Card from "../../../components/Card";
import {Column, Row} from "../../../styles/Flex";
import IconHelper from '../../../assets/ic-help.svg'
import Title from "../../../components/Title";
import {ThemeInnerModel} from "../../../models/theme.model";
import { Doughnut } from 'react-chartjs-2';
import SimpleRow from "../../../components/SimpleRow";


const GraficoComparativoPrecos: React.FC = () => {
    return (
        <GraficoComparativoPrecosContainer>
            <Header>
                <Title>Preços - Dryve x KBB</Title>
                <Icon src={IconHelper} alt={'helper'}/>
            </Header>
            <GraphContainer>
                <DoughnutContainer>
                <Doughnut data={{
                    labels: [
                        'blue',
                        'red',
                        'yellow'
                    ],
                    datasets: [
                        {
                            data: [60, 25, 15],
                            backgroundColor: ['#1070ca', '#ec4c47', '#f7d154'],
                            hoverBackgroundColor: ['#1070ca', '#ec4c47', '#f7d154'],
                        }
                    ]
                }} options={{
                        legend: undefined,
                        hover: undefined,
                        elements: {
                            arc: {
                                borderWidth: 0,
                            },
                        },
                        cutoutPercentage: 80,
                    maintainAspectRatio: false
                    }} />
                </DoughnutContainer>
                <GraphDescription>

                    <SimpleRow>
                        <BlueCircle/>
                        <DescriptionText>Na média</DescriptionText>
                        <DescriptionPercent>60%</DescriptionPercent>
                    </SimpleRow>
                    <DescriptionRowWithMargin>
                        <RedCircle/>
                        <DescriptionText>Acima da média</DescriptionText>
                        <DescriptionPercent>25%</DescriptionPercent>
                    </DescriptionRowWithMargin>
                    <SimpleRow>
                        <YellowCircle/>
                        <DescriptionText>Abaixo da média</DescriptionText>
                        <DescriptionPercent>15%</DescriptionPercent>
                    </SimpleRow>

                </GraphDescription>
            </GraphContainer>
        </GraficoComparativoPrecosContainer>
    );
};

export default GraficoComparativoPrecos;

const GraficoComparativoPrecosContainer = styled(Card)`
margin-top: 30px;
padding: 18px 20px;
`

const Header = styled.div`
${Row};
margin-bottom: 26px;
`


const Icon = styled.img`
margin-left: 6px;
`

const GraphContainer = styled.div`
display: grid;
grid-template-columns: 150px 1fr;
grid-column-gap: 30px;
`

const DoughnutContainer = styled.div`
${Row};
justify-content: center;
overflow: hidden;
height: 140px;
`

const GraphDescription = styled.div`
${Column};
margin-top: 20px;
`

const DescriptionRowWithMargin = styled(SimpleRow)`
margin: 10px 0;
`

const Circle = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
`

const BlueCircle = styled(Circle)`
background-color: #1070ca;
`

const RedCircle = styled(Circle)`
background-color: #ec4c47;
`

const YellowCircle = styled(Circle)`
background-color: #f7d154;
`

const DescriptionText = styled(Title)`
margin: 0 5px 0 8px;
`

const DescriptionPercent = styled.span`
font-family: 'Inter', sans-serif;
font-size: 12px;
line-height: 1;
color: ${({theme}: ThemeInnerModel) => theme.text.lightColor};
`