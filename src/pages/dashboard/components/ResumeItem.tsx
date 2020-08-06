import React from 'react';
import styled from "styled-components";
import Card from "../../../components/Card";
import {Row} from "../../../styles/Flex";
import ArrowUp from '../../../assets/ic-arrow-up.svg'
import ArrowDown from '../../../assets/ic-arrow-down.svg'
import Theme, {ThemeInnerModel} from "../../../models/theme.model";
import SimpleColumn from "../../../components/SimpleColumn";
import SimpleRow from "../../../components/SimpleRow";

interface ComponentProps {
    title: string
    value: string
    percentage: string
    period: string
    icon: string
    isUp: boolean
}

const ResumeItem: React.FC<ComponentProps> =
    ({title, value, percentage, period, icon, isUp = true}) => {

        return (
            <ResumeCardContainer>
                <SimpleColumn>
                    <Title>{title}</Title>
                    <Value>{value}</Value>
                    <SimpleRow>
                        <img src={isUp ? ArrowUp : ArrowDown} alt={'arrow'}/>
                        <Percentage isUp={isUp}>{percentage}%</Percentage>
                        <Period>{period}</Period>
                    </SimpleRow>
                </SimpleColumn>
                <IconContainer>
                    <img src={icon} alt={'icon'}/>
                </IconContainer>
            </ResumeCardContainer>
        );
    };

export default ResumeItem;

const ResumeCardContainer = styled(Card)`
padding: 15px 20px 13px 20px;
${Row};
justify-content: space-between;
`

const Title = styled.span` 
font-size: 10px;
font-weight: 500;
font-family: 'Inter', sans-serif;
line-height: 1.6;
letter-spacing: 1.5px;
opacity: 0.5;
color: ${({theme}: ThemeInnerModel) => theme.text.black};
`

const Value = styled.span`
font-family: 'Inter', sans-serif;
font-size: 34px;
line-height: 1.06;
margin: 6px 0 8px 0;
`

const Percentage = styled.span<{ isUp: boolean }>`
font-size: 12px;
line-height: 16px;
letter-spacing: .4px;
margin-right: 5px;
${({isUp, theme}: { isUp: boolean, theme: Theme }) => isUp ? ({
    color: theme.text.purple,
}) : ({
    color: theme.text.red,
})};
`

const Period = styled.span`
font-family: 'Inter', sans-serif;
font-size: 11px;
line-height: 1.45;
opacity: 0.5;
color: ${({theme}: ThemeInnerModel) => theme.text.black};
`

const IconContainer = styled.div`
${Row};
justify-content: center;
width: 64px;
height: 64px;
border-radius: 50%;
background-color: ${({theme}: ThemeInnerModel) => theme.colorBlueLight};
`
