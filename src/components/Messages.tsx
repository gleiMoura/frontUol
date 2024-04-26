import React from "react";
import styled from "styled-components";

export const MessagesComponent: React.FC = () => {
    return (
        <>
            <MainMessages>

            </MainMessages>
        </>
    )
};

const MainMessages = styled.section`
    width: 100%;
    height: 80%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: #E5E5E5;
`;