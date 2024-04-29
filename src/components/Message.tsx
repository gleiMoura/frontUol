import { FC } from "react";
import styled from "styled-components";

interface messageType {
    messageTime: string,
    participantMessage: string,
    fromOrTo: string
}

export const Message: FC<messageType> = ({ messageTime, participantMessage, fromOrTo }) => {
    return (
        <MessageComponent>
            <p>
                <span className="time">{messageTime}</span> {``}
                <span className="from_or_to">{fromOrTo}</span> {` `}
                <span className="message">{participantMessage}</span>
            </p>
        </MessageComponent>
    )
};

const MessageComponent = styled.div`
    width: 100%;
    height: 50px;
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

