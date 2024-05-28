//react
import styled from 'styled-components';
import "./reset.css";
//components
import { HeaderComponent } from '../components/HeaderComponentHome/Header';
import { MessagesComponent } from '../components/MessagesComponentHome/Messages';
import { FooterComponent } from '../components/FooterComponentHome/Footer';
import { ContactPopUp } from '../components/ContactComponent/ContactComponent';
//hooks
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalSorage';

export const Home: React.FC = () => {
    const [openContact, setOpenContact] = useState(false);
    const { value: userName } = useLocalStorage("name")

    return (
        <>
            {openContact && <ContactPopUp openContact={openContact} setOpenContact={setOpenContact} />}
            <MyHome>
                <HeaderComponent setOpenContact={setOpenContact} name={userName} />
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