import React from 'react';
import styled from "styled-components";
import Card from "../../../components/Card";
import {ThemeInnerModel} from "../../../models/theme.model";
import {ImageDefault} from "../../../styles/Image";
import intencoesCompra from '../../../mock/intencoes-compra.mock'
import IntencaoCompra from "../../../models/intencao-compra.model";
import Divider from "../../../components/Divider";
import Title from "../../../components/Title";

const TopIntencoesCompra: React.FC = () => {

    return (
        <TopIntencoesCompraContainer>
            <MainTitle>Top intenções de compra</MainTitle>
            {
                intencoesCompra.map((intencao: IntencaoCompra, index: number) => {
                    return (
                        <div key={index}>
                            <GridRow>
                                <Img src={intencao.image} />
                                <Title>{intencao.brandName}</Title>
                                <Title>{intencao.amount}</Title>
                            </GridRow>
                            <DividerMargemMenor noMarginLastChild={index === intencoesCompra.length - 1} />
                        </div>
                    )
                })
            }
        </TopIntencoesCompraContainer>
    );
};

export default TopIntencoesCompra;

const TopIntencoesCompraContainer = styled(Card)`

`

const MainTitle = styled(Title)`
margin: 18px 0 30px 20px;
display: inline-block;
`

const GridRow = styled.div`
display: grid;
grid-template-columns: 50px 1fr 82px;
padding-left: 20px;
`

const Img = styled.img`
width: 36px;
height: 36px;
${ImageDefault};
border-color: ${({theme}: ThemeInnerModel) => theme.colorWhite};
`

const DividerMargemMenor = styled(Divider)`
margin: 14px 0;
${({noMarginLastChild}) => noMarginLastChild ? ({
    marginBottom: 0,
}) : null

}
`