import {css} from "styled-components";
import {ThemeInnerModel} from "../models/theme.model";

export const LightText = css`
font-family: 'Inter', sans-serif;
color: ${({theme}: ThemeInnerModel) => theme.text.primaryColor};
line-height: 1;
letter-spacing: 0.33px;
`

export const BoldText = css`
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 1.71;
letter-spacing: 0.1px;
color: ${({theme}: ThemeInnerModel) => theme.text.black};
`
