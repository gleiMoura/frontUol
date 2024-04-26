import React from "react";
import styled from "styled-components";
import { LuSend } from "react-icons/lu";

export const FooterComponent: React.FC = () => {
    return (
        <>
            <FooterMain>
                <TextInput rows={4} cols={10} placeholder="Esvreva aqui...">

                </TextInput>
                <SendButton>
                    <LuSend size={30} />
                </SendButton>
            </FooterMain>
        </>
    )
};

const FooterMain = styled.footer`
    width: 100%;
    height: 10%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: white;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const TextInput = styled.textarea`
    width: 50%;
    height: 40%;
    border: none;
    outline: none;
    resize: none;
    padding: 5px
`;

const SendButton = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
`
