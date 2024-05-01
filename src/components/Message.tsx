import { FC } from "react";
import styled from "styled-components";
import { messageType } from "../interfaces/messageInterface";

export const Message: FC<messageType> = ({ time, text, from, to }) => {
    return (
        <MessageComponent>
            <p>
                <span className="time">{time}</span> {` `}
                <span className="from_or_to">{from}</span> {` `}
                <span className="message"> para </span>
                <span className="from_or_to">{to}</span> {`: `}
                <span className="message">{text}</span>
            </p>
        </MessageComponent>
    )
};

const MessageComponent = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 10px;
    font-size: 2,5vh;
    background-color: #DCDCDC;

    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;  

    .time{
        color: #AAA;
    }

    .message {
        color: #000;
        font-family: 'Roboto';
        font-weight: 400;
    }

    .from_or_to {
        color: #000;
        font-family: 'Roboto';
        font-weight: 600;
    }
`;

