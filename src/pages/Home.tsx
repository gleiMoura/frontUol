import React, { useEffect } from 'react';
import styled from 'styled-components';
import "./reset.css";

import { HeaderComponent } from '../components/Header';
import { MessagesComponent } from '../components/Messages';
import { FooterComponent } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useNameFromUser } from '../contexts/UserContext';
import { useCreateName } from '../hooks/useCreateName';
import { useErrorMessage } from '../contexts/ErrorContext';

export const Home: React.FC = () => {
    const navigate = useNavigate();
    const { setErrorText } = useErrorMessage();
    const { name } = useNameFromUser();
    const { loadingName, errorName } = useCreateName(name);

    useEffect(() => {
        if (errorName && !loadingName) {
            setErrorText(errorName);
            setTimeout(() => navigate("/"), 3000);
        }
    }, [errorName, loadingName])

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