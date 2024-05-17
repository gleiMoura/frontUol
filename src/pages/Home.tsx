//react
import styled from 'styled-components';
import "./reset.css";
//components
import { HeaderComponent } from '../components/HomeHeaderComponent/Header';
import { MessagesComponent } from '../components/HomeMessagesComponent/Messages';
import { FooterComponent } from '../components/HomeFooterComponent/Footer';
import { ContactPopUp } from '../components/ContactComponent/ContactComponent';
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