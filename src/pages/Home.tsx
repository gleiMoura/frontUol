import React, { useEffect } from 'react';
import styled from 'styled-components';
import "./reset.css";

import { HeaderComponent } from '../components/Header';
import { MessagesComponent } from '../components/Messages';
import { FooterComponent } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useNameFromUser } from '../contexts/UserContext';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const { name } = useNameFromUser();

    useEffect(() => {
        !name && navigate("/");
    }, [name])

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