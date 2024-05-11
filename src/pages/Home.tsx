//react
import styled from 'styled-components';
import "./reset.css";
//components
import { HeaderComponent } from '../components/Header';
import { MessagesComponent } from '../components/Messages';
import { FooterComponent } from '../components/Footer';
import { ContactPopUp } from '../components/ContactPopUp';
import { useState } from 'react';

export const Home: React.FC = () => {
    const [openContact, setOpenContact] = useState(false);

    return (
        <>
            {openContact && <ContactPopUp openContact={openContact} setOpenContact={setOpenContact} />}
            <MyHome>
                <HeaderComponent setOpenContact={setOpenContact} />
                <MessagesComponent />
                <FooterComponent />
            </MyHome>
        </>
    )
}

//styled-components
const MyHome = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
`