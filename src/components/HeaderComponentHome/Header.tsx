import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";

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
                <Link to={'/'}>
                    <Logo src={logo} alt="logo" />
                </Link>
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

    a {
        height: 100%;
    }
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
    cursor: pointer;
`