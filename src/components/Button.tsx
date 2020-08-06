import styled from "styled-components";
import {Row} from "../styles/Flex";

import React from 'react';
import {ThemeInnerModel} from "../models/theme.model";
import {hexToRgba} from "../util/color_util";

const Button: any = ({label, ...props}: any) => {
    return (
        <ButtonStyled {...props}>{label}</ButtonStyled>
    );
};

export default Button;

export const PurpleButton = styled(Button)`
background-color: ${({theme}: ThemeInnerModel) => theme.text.purple};
color: ${({theme}: ThemeInnerModel) => theme.colorWhite};

&:hover {
background-color: ${({theme}: ThemeInnerModel) => hexToRgba(theme.text.purple, .8)};
}
`

const ButtonStyled = styled.button`
width: 150px;
height: 36px;
${Row};
justify-content: center;
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 1.14;
border-radius: 4px;
cursor: pointer;
`
