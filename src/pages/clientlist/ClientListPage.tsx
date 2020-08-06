import React from 'react';
import styled from "styled-components";
import {Row} from "../../styles/Flex";
import Button, {PurpleButton} from "../../components/Button";
import {ThemeInnerModel} from "../../models/theme.model";
import {hexToRgba} from "../../util/color_util";
import IconFiltrar from '../../assets/ic-filter-list.svg'
import IconPlus from '../../assets/ic-plus.svg'
import IconMore from '../../assets/ic-more-vert.svg'
import {useHistory} from "react-router";
import ClientFormPage from "../clientForm/ClientFormPage";
import Card from "../../components/Card";
import Table, {Td, Th, Tr} from "../../components/Table";
import Checkbox from "../../components/Checkbox";
import clientsMock from "../../mock/clients.mock";
import Client from "../../models/client.model";
import StatusBudget from "./components/StatusBudget";
import IconDropDown from "../../assets/ic-arrow-drop-down.svg";
import ArrowRight from "../../assets/ic-chevron-right.svg";
import ArrowLeft from "../../assets/ic-chevron-left.svg";
import Title from "../../components/Title";
import SimpleRow from "../../components/SimpleRow";
import SimpleColumn from "../../components/SimpleColumn";
import InputFiltro from "./InputFiltro";

const ClientListPage = () => {

    const history = useHistory()

    return (
        <SimpleColumn>
            <Header>
                <SimpleRow>
                    <ButtonFiltrar label={
                        <>
                            <img src={IconFiltrar} alt={'filtro'}/>
                            FILTRAR
                        </>
                    }/>
                    <InputFiltro />
                </SimpleRow>
                <ButtonAdd onClick={() => history.push(ClientFormPage.routeName)} label={
                    <>
                        <img src={IconPlus} alt={'add'}/>
                        ADICIONAR
                    </>
                }/>
            </Header>
            <Card>
                <Table>
                    <thead>
                    <Tr>
                        <Th><AlignColum><Checkbox/></AlignColum></Th>
                        <Th><AlignColum>NOME</AlignColum></Th>
                        <Th><AlignColum>STATUS</AlignColum></Th>
                        <Th><AlignColum>TELEFONE</AlignColum></Th>
                        <Th><AlignColum>E-MAIL</AlignColum></Th>
                    </Tr>
                    </thead>
                    <tbody>
                    {
                        clientsMock.map((client: Client, index: number) => {
                            return (
                                <Tr key={index}>
                                    <Td><AlignColum><Checkbox/></AlignColum></Td>
                                    <Td><AlignColum>{client.name}</AlignColum></Td>
                                    <Td><AlignColum><StatusBudget status={client.status}/></AlignColum></Td>
                                    <Td><AlignColum>{client.phone}</AlignColum></Td>
                                    <Td><AlignColum>{client.email}</AlignColum></Td>
                                    <Td><img src={IconMore} alt="more"/></Td>
                                </Tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
                <Footer>
                    <SimpleRow>
                        <SmallText>Itens por página:</SmallText>
                        <SimpleRow>
                            <QtdPerPage>10</QtdPerPage>
                            <IconDropdown src={IconDropDown} alt={'dropdown icon'}/>
                        </SimpleRow>
                        <SmallText>1-10 de 3.456</SmallText>
                    </SimpleRow>
                    <RightFooter>
                        <img src={ArrowLeft} alt={'caret-right'}/>
                        <img src={ArrowRight} alt={'caret-left'}/>
                    </RightFooter>
                </Footer>
            </Card>
        </SimpleColumn>
    );
};

ClientListPage.routeName = '/clientes'

export default ClientListPage;

const Header = styled.div`
${Row};
justify-content: space-between;
margin-bottom: 30px;
`

const ButtonFiltrar = styled(Button)`
width: 106px;
background-color: ${({theme}: ThemeInnerModel) => theme.contentBackgroundColor};
color: ${({theme}: ThemeInnerModel) => theme.text.purple};
margin-right: 10px;

img {
margin-right: 6px;
}

&:hover {
color: ${({theme}: ThemeInnerModel) => hexToRgba(theme.text.purple, .8)};
}
`


const ButtonAdd = styled(PurpleButton)`
width: 130px;
padding: 0 17px 0 13px;
img {
margin-right: 11px;
}
`

const AlignColum = styled.div`
${Row};
padding: 22px 20px;
`

const Footer = styled.div`
height: 54px;
${Row};
justify-content: space-between;
padding: 0 20px;
`

const RightFooter = styled.div`
${Row};
justify-content: space-between;
width: 72px;
`

const SmallText = styled.span`
font-family: 'Inter', sans-serif;
color: ${({theme}: ThemeInnerModel) => theme.text.lightColor};
font-size: 11px;
`

const QtdPerPage = styled(Title)`
margin-left: 7px;
`

const IconDropdown = styled.img`
margin-right: 3px;
`