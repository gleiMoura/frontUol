//react
import styled from "styled-components";
import { FC, useEffect } from "react";
//hooks and functions
import { useErrorMessage } from "../../contexts/ErrorContext";
import { useNavigate } from "react-router-dom";
import { useFetchMessages } from "../../hooks/useFetchMessages";
import useLocalStorage from "../../hooks/useLocalSorage";
import { updateParcipant } from "../../services/statusService";
//components
import { Message } from "./Message";
import { GenericSkeleton } from "../GenericSkeleton";

export const MessagesComponent: FC = () => {
    const navigate = useNavigate();
    const { errorText, setErrorText } = useErrorMessage();
    const { value: user } = useLocalStorage("name");
    const { messages, loadingMessages } = useFetchMessages(user);

    useEffect(() => {
        if (errorText === "Erro ao carregar dados!") {
            navigate("/");
        }
    }, [errorText])

    useEffect(() => {
        let intervalUpdate = setInterval(async () => {
            try {
                await updateParcipant(user);
            } catch (e) {
                setErrorText("Não foi possível manter a conexão. Entre com outro nome.");
                clearInterval(intervalUpdate);
                navigate("/")
            }
        }, 5000);

        return () => {
            clearInterval(intervalUpdate)
        }
    }, [user])

    if (loadingMessages) {
        return (
            <MainMessages>
                <GenericSkeleton number={15} marginTop="5px" height={40} />
            </MainMessages>
        )
    } else {
        return (
            <>
                <MainMessages>
                    {[...messages].reverse().map((message) => {
                        return (
                            <Message
                                key={message._id}
                                _id={message._id}
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

//styled-components
const MainMessages = styled.section`
    width: 100%;
    padding: 65px 0;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: #E5E5E5;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;
    `;