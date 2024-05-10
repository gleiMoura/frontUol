//react
import styled from "styled-components";
import { FC, useEffect, useRef } from "react";
//hooks and functions
import { useErrorMessage } from "../contexts/ErrorContext";
import { useNavigate } from "react-router-dom";
import { useFetchUsers } from "../hooks/useFetchMessages";
import useLocalStorage from "../hooks/useLocalSorage";
import { updateParcipant } from "../services/statusService";
//components
import { Message } from "./Message";
import { SkeletonMessages } from "./SkeletonMessages";

export const MessagesComponent: FC = () => {
    const navigate = useNavigate();
    const { setErrorText } = useErrorMessage();
    const { value: user } = useLocalStorage("name");
    const { messages, loadingMessages, error } = useFetchUsers(user);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    if (error || !user) {
        setErrorText(error ?? "Ocorreu um erro desconhecido!");
        navigate("/")
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const updateUser = setInterval(async () => {
            try {
                const response = await updateParcipant(user);
            } catch (e) {
                setErrorText("Não foi possível manter a conexão.");
                navigate("/")
            }
        }, 5000);

        return () => clearInterval(updateUser);
    }, [user])

    if (loadingMessages) {
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
                    <div ref={messagesEndRef} />
                </MainMessages>
            </>
        )
    }
};

//styled-components
const MainMessages = styled.section`
    width: 100%;
    height: 80%;
    padding: 2vh 0;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: #E5E5E5;
    overflow-y: scroll;
`;