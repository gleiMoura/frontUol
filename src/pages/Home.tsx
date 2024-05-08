//react
import styled from 'styled-components';
import "./reset.css";
//components
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

//styled-components
const MyHome = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
`