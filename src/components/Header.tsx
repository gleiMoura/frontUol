import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { IoPeople } from "react-icons/io5";

interface HeaderProps {
    setOpenContact: (openContact: boolean) => void;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ setOpenContact }) => {
    const handleOpenContact = () => {
        setOpenContact(true);
    }

    return (
        <>
            <MainHeader>
                <Logo src={logo} alt="logo" />
                <ContactsButton onClick={handleOpenContact}>
                    <IoPeople size={30} className="icon" />
                </ContactsButton>
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`
    width: 100%;
    height: 60px;
    background-color: white;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Logo = styled.img`
    height: 100%;
`;

const ContactsButton = styled.div`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;        
`