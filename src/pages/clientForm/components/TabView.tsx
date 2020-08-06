import React from 'react';
import styled from "styled-components";
import Card from "../../../components/Card";
import {Column, Row} from "../../../styles/Flex";
import Theme, {ThemeInnerModel} from "../../../models/theme.model";
import Button, {PurpleButton} from "../../../components/Button";
import {hexToRgba} from "../../../util/color_util";

const TabView: React.FC = ({children}) => {
    return (
        <TabViewStyled>
            <TabContainer>
                <Tab isEnabled={true}>Dados do cliente</Tab>
                <Tab>Dados do veículo</Tab>
                <Tab>Itenção de compra</Tab>
            </TabContainer>
            <Content><div>{children}</div></Content>
            <Footer>
                <PurpleButton label={'SALVAR'} />
                <ButtonCancelar label={'CANCELAR'} />
            </Footer>
        </TabViewStyled>
    );
};

export default TabView;

const TabViewStyled = styled(Card)`
${Column};
`

const TabContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
`

const Tab = styled.div<{isEnabled?: boolean}>`
text-transform: uppercase;
height: 48px;
${Row};
justify-content: center;
border-bottom: 2px solid rgba(0, 0, 0, 0.12);
font-size: 14px;
line-height: 1.14;
color: rgba(0, 0, 0, 0.38);
cursor: pointer;

${({isEnabled, theme}: {isEnabled?: boolean, theme: Theme}) => isEnabled ? ({
    color: theme.text.purple,
    borderBottomColor: theme.text.purple,
    fontWeight: 500,
}) : null};

`

const Footer = styled.div`
${Row};
padding-left: 20px;
height: 75px;
background-color: ${({theme}: ThemeInnerModel) => hexToRgba(theme.colorBlueLight, .5)};
border-top: 1px solid rgba(0, 0, 0, 0.12);
margin-top: 25px;
& > button {
margin-right: 15px;
}
`

const ButtonCancelar = styled(Button)`
background-color: transparent;
color: ${({theme}: ThemeInnerModel) => theme.text.purple};

&:hover {
color: ${({theme}: ThemeInnerModel) => hexToRgba(theme.text.purple, .8)};
}
`

const Content = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 40px 0 0 40px;
`