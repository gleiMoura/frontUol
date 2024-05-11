import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { LuSend } from "react-icons/lu";
import { sendMessage } from "../services/messageService";
import useLocalStorage from "../hooks/useLocalSorage";
import { messageType } from "../interfaces/messageInterface";
import { useErrorMessage } from "../contexts/ErrorContext";

export const FooterComponent: FC = () => {
    const [messageValue, setMessageValue] = useState("");
    const { value: user }: { value: string } = useLocalStorage("name");
    const { setErrorText } = useErrorMessage();

    const genericMessage: messageType = {
        to: "todos",
        type: "message",
        text: messageValue
    };

    const handleChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageValue(event.target.value);
    };

    const handleClickMessage = async () => {
        try {
            await sendMessage(user, genericMessage);
            setMessageValue("")
        } catch (e) {
            console.log(e);
            setErrorText("Erro ao carregar dados!")
        }
    }

    return (
        <>
            <MainFooter>
                <TextInput
                    rows={4}
                    cols={10}
                    placeholder="Esvreva aqui..."
                    onChange={handleChangeMessage}
                    value={messageValue}
                />
                <SendButton onClick={handleClickMessage}>
                    <LuSend size={30} />
                </SendButton>
            </MainFooter>
        </>
    )
};

const MainFooter = styled.footer`
    width: 100%;
    height: 60px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: white;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const TextInput = styled.textarea`
    width: 50%;
    height: 40%;
    font-size: 1rem;
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
