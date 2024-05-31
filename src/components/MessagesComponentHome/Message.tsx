import { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { messageType } from "../../interfaces/messageInterface";
import { MessageButtons } from "./MessageButtons";
import { editMessage } from "../../services/messageService";
import useLocalStorage from "../../hooks/useLocalSorage";
import { useMessageContext } from "../../contexts/messageContext";

export const Message: FC<messageType> = ({ time, text, from, to, type, _id }) => {
    const { value: userName } = useLocalStorage("name");
    const { userMessage } = useMessageContext();
    const [editBoolean, setEditBoolean] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleEditText = (event: ChangeEvent<HTMLInputElement>) => {
        setEditText(event.target.value)
    };

    const handleEditMessage = async () => {
        const message = {
            text: editText,
            to: userMessage.to,
            type: userMessage.type
        };

        try {
            await editMessage(userName, message, _id)
            setEditBoolean(false);
        } catch (error) {
            alert("A mensagem não pode ser editada no momento!");
            console.log(error);
        }
    };

    return (
        <MessageComponent type={type}>
            <Information>
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
                        {!editBoolean ? <span className="message">{text}</span> :
                            <input type="text" value={editText} onChange={handleEditText} />
                        }
                    </p>
                </Text>
                {editBoolean &&
                    <EditButtons>
                        <button onClick={handleEditMessage}>Editar</button>
                        <button onClick={() => setEditBoolean(false)}>Cancelar</button>
                    </EditButtons>
                }
            </Information>
            <MessageButtons
                type={type}
                from={from}
                to={to}
                messageId={_id}
                setEditBoolean={setEditBoolean}
            />
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
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
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

const Information = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    input {
        outline: none;
        border: solid 1px #DEDEDE;
        font-family: 'Roboto';
        font-size: 1rem;
        border-radius: 10px;
        padding: 5px;
        box-sizing: border-box;
    };

    button {
        outline: none;
        border: none;
        font-family: 'Roboto';
        font-size: 1rem;
        background-color: black;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const Text = styled.div`
    width: 90%;
    display: flex;
    margin: 10px;
`;

const EditButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    margin: 10px;
`
