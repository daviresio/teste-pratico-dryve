import React, {useEffect} from 'react';
import styled from "styled-components";
import ResumeItem from "./components/ResumeItem";
import IconDirection from '../../assets/ic-directions-car.svg'
import IconImportant from '../../assets/ic-important-devices.svg'
import IconMoney from '../../assets/ic-attach-money.svg'
import UltimasAvaliacoes from "./components/ultimasAvaliacoes/UltimasAvaliacoes";
import TopIntencoesCompra from "./components/TopIntencoesCompra";
import GraficoComparativoPrecos from "./components/GraficoComparativoPrecos";
import {useDispatch} from "react-redux";
import {CarCreators} from "../../store/reducers_saga/car";


const DashboardPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CarCreators.loadCars())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Page>
            <Resumos>
                <ResumeItem title={'AVALIAÇÕES HOJE'} value={'29'} percentage={'36'} period={'desde ontem'} icon={IconDirection} isUp={true} />
                <ResumeItem title={'CARROS PUBLICADOS'} value={'397'} percentage={'4'} period={'este mês'} icon={IconImportant} isUp={true} />
                <ResumeItem title={'TICKET MÉDIO DO ESTOQUE'} value={'R$ 42.567'} percentage={'6'} period={'este mês'} icon={IconMoney} isUp={false} />
            </Resumos>
            <MainContent>
                <UltimasAvaliacoes />
                <RightSide>
                    <TopIntencoesCompra>

                    </TopIntencoesCompra>
                    <GraficoComparativoPrecos>

                    </GraficoComparativoPrecos>
                </RightSide>
            </MainContent>
        </Page>
    );
};

DashboardPage.routeName = '/home'

export default DashboardPage;

const Page = styled.div`

`

const Resumos = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
margin-bottom: 30px;
`


const MainContent = styled.div`
display: grid;
grid-template-columns: 2.05fr 1fr;
grid-column-gap: 20px;
`


const RightSide = styled.div`

`