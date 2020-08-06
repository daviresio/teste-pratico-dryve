import React from 'react';
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import styled from "styled-components";
import {ThemeInnerModel} from "../models/theme.model";
import {Column} from "../styles/Flex";
import Footer from "./Footer";

const PageLayout: React.FC = ({children}) => {
    return (
        <PageLayoutContainer>
            <NavigationContainer>
                <Navbar/>
            </NavigationContainer>
            <PageLayoutSubContainer>
                <Topbar/>
                <PageContainer>{children}</PageContainer>
                <Footer/>
            </PageLayoutSubContainer>
        </PageLayoutContainer>
    );
};

export default PageLayout

const PageLayoutContainer = styled.div`
height: 100vh;
width: 100vw;
display: grid;
grid-template-columns: ${({theme}: ThemeInnerModel) => theme.navbar.width.colappsed} 1fr;
`

const NavigationContainer = styled.div`
position: relative;
height: 100%;
`

const PageLayoutSubContainer = styled.div`
height: 100%;
${Column};
`

const PageContainer = styled.div`
padding: 30px;
`