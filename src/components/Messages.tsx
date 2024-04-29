import React from "react";
import styled from "styled-components";

import { Message } from "./Message";

export const MessagesComponent: React.FC = () => {
    return (
        <>
            <MainMessages>
                <Message
                    messageTime="(22:10:32)"
                    participantMessage="entra na sala..."
                    fromOrTo="João"
                />
            </MainMessages>
        </>
    )
};

const MainMessages = styled.section`
    width: 100%;
    height: 80%;
    padding: 2vh 0;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: #E5E5E5;
`;