import React from 'react';
import Divider from "../components/Divider";
import styled from "styled-components";
import {Row} from "../styles/Flex";
import {ThemeInnerModel} from "../models/theme.model";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterDivider/>
            <Content>
                <Copyright>2020 © Dryve Tecnologia Ltda.</Copyright>
                <Version>Versão 1.0.1</Version>
            </Content>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
padding: 0 30px 22px 30px;
max-width: 100%;

`

const FooterDivider = styled(Divider)`
margin: 0 0 16px 0;
`

const Content = styled.div`
${Row};
justify-content: space-between;
`

const Copyright = styled.span`
font-family: 'Roboto', sans-serif;
font-size: 14px;
line-height: 1.57;
color: ${({theme}: ThemeInnerModel) => theme.colorBrown};
`

const Version = styled.span`
opacity: 0.5;
font-family: 'Roboto', sans-serif;
font-size: 12px;
line-height: 1.5;
color: ${({theme}: ThemeInnerModel) => theme.colorGray};
`
