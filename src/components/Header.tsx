import styled from "styled-components";
import { IoPeople } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import React from "react";

export const HeaderComponent: React.FC = () => {
    return (
        <>
            <MainHeader>
                <Logo src={logo} alt="logo" />
                <ContactsButton>
                    <IoPeople size={30} className="icon" />
                </ContactsButton>
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`
    width: 100%;
    height: 10%;
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