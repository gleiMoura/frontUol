import styled from 'styled-components';
import "./reset.css";

import { HeaderComponent } from '../components/Header';
import { MessagesComponent } from '../components/Messages';
import { FooterComponent } from '../components/Footer';

export const Home: React.FC = () => {
    return (
        <MyHome>
            <HeaderComponent />
            <MessagesComponent />
            <FooterComponent />
        </MyHome>
    )
};

const MyHome = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
`