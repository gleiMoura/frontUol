import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { IoPeople } from "react-icons/io5";
import { Link } from "react-router-dom";
interface HeaderProps {
    setOpenContact: (openContact: boolean) => void;
    name: string
}

export const HeaderComponent: React.FC<HeaderProps> = ({ setOpenContact, name }) => {
    const handleOpenContact = () => {
        setOpenContact(true);
    }

    return (
        <>
            <MainHeader>
                <Link to={'/'}>
                    <Logo src={logo} alt="logo" />
                </Link>
                <UserName>
                    Usuário: <span className="name">{name}</span>
                </UserName>
                <ContactsButton onClick={handleOpenContact}>
                    <IoPeople size={30} className="icon" />
                </ContactsButton>
            </MainHeader>
        </>
    )
}

const MainHeader = styled.header`
    height: 60px;
    background-color: white;
    position: fixed;
    top: 0;
    right: 0;
    left:0;
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

const UserName = styled.p`
    font-size: 0.8rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;

    .name {
        font-weight: 800;
    }
`;