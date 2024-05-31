import { FC } from "react";
import styled from "styled-components";
import { messageType } from "../../interfaces/messageInterface";
import { MessageButtons } from "./MessageButtons";

export const Message: FC<messageType> = ({ time, text, from, to, type, _id }) => {
    return (
        <MessageComponent type={type}>
            <Text>
                <p>
                    <span className="time">{time}</span>
                </p>
                <p>
                    <span className="from_or_to">{from}</span> {` `}
                    {type === "status" ? "" :
                        <>
                            <span className="message"> para </span>
                            <span className="from_or_to">{to}</span> {`: `}
                        </>
                    }
                    <span className="message">{text}</span>
                </p>
            </Text>
            <MessageButtons type={type} from={from} to={to} messageId={_id} />
        </MessageComponent>
    )
};

//styled-components
const MessageComponent = styled.div<messageType>`
    width: 100%;
    min-height: 50px;
    margin-top: 10px;
    font-size: 2,5vh;
    background-color: ${props => {
        return props.type === "status" ? '#DCDCDC' :
            props.type === "message" ? '#FFFFFF' :
                props.type === "private_message" ? '#FFDEDE' : '#fff';
    }};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
    flex: none;
    
    .time{
        color: #AAA;
        margin-right: 15px;
    }

    .from_or_to {
        color: #000;
        font-family: 'Roboto';
        font-weight: 600;
    }

    .message {
    color: #000;
    font-family: 'Roboto';
    font-weight: 400;
    }
`;

const Text = styled.div`
    display: flex;
`;
