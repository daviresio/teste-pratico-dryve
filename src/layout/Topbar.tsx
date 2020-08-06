import React from 'react';
import styled from "styled-components";
import {ThemeInnerModel} from "../models/theme.model";
import {Row} from "../styles/Flex";
import Logo from '../assets/logo.svg'
import IconSearch from '../assets/ic-search.svg'
import IconNotifications from '../assets/ic-notifications.svg'

const Topbar: React.FC = () => {
    return (
        <TopbarContainer>
            <LeftSide>
                <LogoStyled src={Logo}/>
                <Text>BACKOFFICE</Text>
            </LeftSide>
            <RightSide>
                <IconSearchStyled src={IconSearch} />
                <IconNotificationStyled src={IconNotifications} />
            </RightSide>
        </TopbarContainer>
    );
};

export default Topbar;

const TopbarContainer = styled.div`
height: ${({theme}: ThemeInnerModel) => theme.topbar.height};
background-color: ${({theme}: ThemeInnerModel) => theme.contentBackgroundColor};
box-shadow: 0 1px 0 0 ${({theme}: ThemeInnerModel) => theme.colorWhite};
${Row};
justify-content: space-between;
padding: 30px;
`

const LeftSide = styled.div`
${Row};
`

const LogoStyled = styled.img`
width: 101px;
height: 34px;
object-fit: contain;
`

const Text = styled.span`
display: inline-block;
font-size: 10px;
font-weight: 500;
font-family: 'Roboto', sans-serif;
margin-left: 7px;
color: ${({theme}: ThemeInnerModel) => theme.text.lightColor};
margin-top: 12px;
`

const RightSide = styled.div`

`

const IconSearchStyled = styled.img`
width: 18px;
height: 18px;
margin-right: 27px;
`

const IconNotificationStyled = styled.img`
width: 16px;
height: 20px;
margin-right: 4px;
`



