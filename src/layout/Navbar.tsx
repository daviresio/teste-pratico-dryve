import React, {useState} from 'react';
import styled from "styled-components";
import {ThemeInnerModel} from "../models/theme.model";
import {Column, Row} from "../styles/Flex";
import Title from "../components/Title";
import {BoldText} from "../styles/Typography";
import UserPhoto from '../assets/user.jpg'
import LogoutImg from '../assets/ic-logout.svg'
import IconHomeActive from '../assets/ic-home-active.svg'
import IconHome from '../assets/ic-home.svg'
import IconPersonActive from '../assets/ic-person-active.svg'
import IconPerson from '../assets/ic-person.svg'
import IconCar from '../assets/ic-directions.svg'
import IconTriangle from '../assets/ic-triangle.svg'
import IconWallet from '../assets/ic-wallet.svg'
import {useLocation, withRouter, useHistory} from "react-router";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ClientListPage from "../pages/clientlist/ClientListPage";
import SimpleRow from "../components/SimpleRow";


const Navbar: React.FC = () => {

    const {pathname} = useLocation()
    const history = useHistory()
    const [isDrawerOpened, setIsDrawerOpened] = useState(false)

    const isHomeActive = pathname === DashboardPage.routeName
    const isClientActive = pathname === ClientListPage.routeName

    return (
        <NavbarContainer onMouseEnter={() => setIsDrawerOpened(true)}
                         onMouseLeave={() => setIsDrawerOpened(false)}>
            <UserRow>
                <PhotoContainer>
                    <Photo src={UserPhoto}/>
                </PhotoContainer>
                <UserData>
                    <Name>Vinicius Malara</Name>
                    <SimpleRow>
                        <IconLogout src={LogoutImg} alt={'logout'}/>
                        <LogoutText>SAIR</LogoutText>
                    </SimpleRow>
                </UserData>
            </UserRow>
            <ItemRow isActive={isHomeActive} onClick={() => history.push(DashboardPage.routeName)}
                     isDrawerOpened={isDrawerOpened}>
                <Icon src={isHomeActive ? IconHomeActive : IconHome}/>
                <RouteName isActive={isHomeActive}>Início</RouteName>
            </ItemRow>
            <ItemRow isActive={isClientActive} onClick={() => history.push(ClientListPage.routeName)}
                     isDrawerOpened={isDrawerOpened}>
                <Icon src={isClientActive ? IconPersonActive : IconPerson}/>
                <RouteName isActive={isClientActive}>Clientes</RouteName>
            </ItemRow>
            <ItemRow>
                <Icon src={IconCar}/>
                <RouteName>Veículos</RouteName>
            </ItemRow>
            <ItemRow>
                <Icon src={IconTriangle}/>
                <RouteName>Triangulação</RouteName>
            </ItemRow>
            <ItemRow>
                <Icon src={IconWallet}/>
                <RouteName deactive={true}>Financeiro</RouteName>
            </ItemRow>
        </NavbarContainer>
    );
};

export default withRouter(Navbar);

const NavbarContainer = styled.div`
background-color: ${({theme}: ThemeInnerModel) => theme.contentBackgroundColor};
height: 100%;
display: inline-block;
position: absolute;
top: 0;
left: 0;
width: ${({theme}: ThemeInnerModel) => theme.navbar.width.expanded};
max-width: ${({theme}: ThemeInnerModel) => theme.navbar.width.colappsed};
transition: all .3s;
z-index: 10;
box-shadow: 1px 0 0 0 ${({theme}: ThemeInnerModel) => theme.colorWhite};
padding: 45px 10px;
overflow: hidden;

&:hover {
max-width: ${({theme}: ThemeInnerModel) => theme.navbar.width.expanded};
transition: all .3s;
}

`

const UserRow = styled.div`
${Row};
margin-bottom: 27px;
`

const UserData = styled.div`
margin-left: 18px;
${Column};
justify-content: center;
`

const Name = styled(Title)`
line-height: 1.14;
white-space: nowrap;
margin-bottom: 5px;
`

const LogoutText = styled.span`
font-family: 'Inter', sans-serif;
opacity: 0.5;
line-height: 1;
letter-spacing: 1.5px;
font-size: 10px;
font-weight: 500;
color: ${({theme}: ThemeInnerModel) => theme.text.black};
margin-left: 5px;
`

const PhotoContainer = styled.div`
width: 60px;
min-width: 60px;
height: 60px;
border: 2px solid ${({theme}: ThemeInnerModel) => theme.colorBlue};
border-radius: 50%;
${Row};
justify-content: center;
margin-left: 5px;

`

const Photo = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
`

const ItemRow = styled.div<{ isActive?: boolean, isDrawerOpened?: boolean }>`
width: 210px;
height: 40px;
border-radius: 4px;
margin-bottom: 5px;
cursor: pointer;
${Row};
${({isActive, theme}) => isActive ? ({
    backgroundColor: theme.colorBlueLight,
}) : ({})};

${({isDrawerOpened, theme}) => !isDrawerOpened ? ({
    backgroundColor: theme.contentBackgroundColor,
}) : null};
`

const Icon = styled.img`
margin: 0 25px 0 20px;
`

const RouteName = styled.span<{ isActive?: boolean, deactive?: boolean }>`
${BoldText};
line-height: 1.14;
${({isActive, deactive, theme}) => isActive ? ({
    color: theme.colorBlue,
    fontWeight: 'bold',
}) : deactive ? ({
    opacity: '.2'
}) : ({})};
`

const IconLogout = styled.img`

`