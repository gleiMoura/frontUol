import styled from "styled-components";
import useLocalStorage from "../../hooks/useLocalSorage";
import { ChangeEvent, FC } from "react";
import { LuSend } from "react-icons/lu";
import { sendMessage } from "../../services/messageService";
import { useErrorMessage } from "../../contexts/ErrorContext";
import { useMessageContext } from "../../contexts/messageContext";

export const FooterComponent: FC = () => {
    const { userMessage, setUserMessage } = useMessageContext();
    const { value: user }: { value: string } = useLocalStorage("name");
    const { setErrorText } = useErrorMessage();

    const handleChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
        setUserMessage(prevState => ({
            ...prevState,
            text: event.target.value
        }))
    };

    const handleClickMessage = async () => {
        try {
            if (userMessage.text === "") return;
            await sendMessage(user, userMessage);
            setUserMessage(prevState => ({
                ...prevState,
                text: ""
            }))
        } catch (e) {
            console.log(e);
            setErrorText("Erro ao carregar dados!")
        }
    };

    return (
        <>
            <MainFooter>
                <TextInput
                    placeholder="Esvreva aqui..."
                    onKeyDown={async (e) => { e.key === "Enter" && handleClickMessage() }}
                    onChange={handleChangeMessage}
                    value={userMessage.text}
                />
                <SendButton onClick={handleClickMessage}>
                    <LuSend size={30} />
                </SendButton>
            </MainFooter>
        </>
    )
};

const MainFooter = styled.footer`
    height: 60px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.20) inset;
    background-color: white;
    position: fixed;
    bottom: 0;
    right: 0;
    left:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const TextInput = styled.input`
    width: 50%;
    height: 40%;
    font-size: 1rem;
    border: none;
    outline: none;
    resize: none;
    padding: 5px;
    box-sizing: border-box;
    font-family: 'Roboto';
`;

const SendButton = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`
