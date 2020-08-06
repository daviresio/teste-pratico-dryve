import React from 'react';
import styled from "styled-components";
import {Column} from "../../styles/Flex";
import {ThemeInnerModel} from "../../models/theme.model";
import TabView from "./components/TabView";
import Input from "../../components/Input";

const ClientFormPage = () => {
    return (
        <Page>
            <Header>Adicionar cliente</Header>
            <TabView>
                <RowDivided>
                    <InputStyled placeholder={'Nome'}/>
                    <InputStyled placeholder={'Sobrenome'}/>
                </RowDivided>
                <InputStyled placeholder={'E-mail'}/>
                <RowDivided>
                    <InputStyled placeholder={'Telefone'}/>
                    <AdicionarOutro>+ adicionar outro</AdicionarOutro>
                </RowDivided>
                <RowDivided>
                    <InputStyled placeholder={'CEP'}/>
                </RowDivided>
                <InputStyled placeholder={'Endereço'} disabled={true}/>
                <RowDivided>
                    <InputStyled placeholder={'Número'} disabled={true}/>
                    <InputStyled placeholder={'Complenento'} disabled={true}/>
                </RowDivided>
                <InputStyled placeholder={'Bairro'} disabled={true}/>
                <RowDivided>
                    <InputStyled placeholder={'Cidade'} disabled={true}/>
                    <InputStyled placeholder={'Estado'} disabled={true}/>
                </RowDivided>
            </TabView>
        </Page>
    );
};

ClientFormPage.routeName = '/clientes/cadastro'

export default ClientFormPage;

const Page = styled.div`
${Column};
`

const Header = styled.h1`
font-family: 'Inter', sans-serif;
line-height: 1.2;
letter-spacing: 0.15px;
font-size: 20px;
font-weight: 500;
color: ${({theme}: ThemeInnerModel) => theme.text.black};
margin-bottom: 22px;
`

const RowDivided = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 16px;
`

const AdicionarOutro = styled.span`
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 500;
line-height: 1.71;
letter-spacing: 0.1px;
color: ${({theme}: ThemeInnerModel) => theme.colorBlue};
`

const InputStyled = styled(Input)`
margin-bottom: 15px;
`