import React from 'react';
import styled from "styled-components";
import Theme from "../../../models/theme.model";
import {Row} from "../../../styles/Flex";

const StatusBudget: React.FC<{status: string}> = ({status}) => {

    return (
        <StatusBudgetStyled status={status}>{status}</StatusBudgetStyled>
    );
};

export default StatusBudget;

const StatusBudgetStyled = styled.div<{status: string}>`
width: 80px;
height: 26px;
border-radius: 13px;
text-align: center;
font-size: 12px;
line-height: 1;
letter-spacing: normal;
${Row};
justify-content: center;
${({status, theme}: {status: string, theme: Theme}) => status === 'Cliente' ? ({
    backgroundColor: theme.colorBlueLight,
    color: theme.colorBlue,
}) : ({
    backgroundColor: '#f6f6f6',
    color: '#666666',
})};
`