import { FC } from "react";
import styled from "styled-components";
import { useNameFromUser } from "../contexts/UserContext";

import { Message } from "./Message";
import { useFetchUsers } from "../hooks/useFetchMessages";
import { SkeletonMessages } from "./SkeletonMessages";

export const MessagesComponent: FC = () => {
    const { name } = useNameFromUser();
    const { messages, isLoading, error } = useFetchUsers(name);

    if (error) console.log(error)

    if (isLoading) {
        return (
            <MainMessages>
                <SkeletonMessages />
            </MainMessages>
        )
    } else {
        return (
            <>
                <MainMessages>
                    {messages.map((message) => {
                        return (
                            <Message
                                key={message._id}
                                time={`(${message.time})`}
                                text={message.text}
                                from={message.from}
                                to={message.to}
                                type={message.type}
                            />
                        )
                    })}
                </MainMessages>
            </>
        )
    }
};

const MainMessages = styled.section`
    width: 100%;
    height: 80%;
    padding: 2vh 0;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: #E5E5E5;
    overflow-y: scroll;
`;