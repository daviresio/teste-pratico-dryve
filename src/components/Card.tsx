import React from 'react';
import styled from "styled-components";
import {ThemeInnerModel} from "../models/theme.model";
import {DefaultBorder} from "../styles/Border";

const Card: React.FC = ({children, ...props}) => {
    return (
        <CardContainer {...props}>
            {children}
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.div`
background-color: ${({theme}: ThemeInnerModel) => theme.contentBackgroundColor};
${DefaultBorder};
border-radius: 4px;
`
