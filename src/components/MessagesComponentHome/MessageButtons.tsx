import styled from "styled-components";
import useLocalStorage from "../../hooks/useLocalSorage";
import { Tooltip, Container } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoReloadCircle } from "react-icons/io5";
import { deleteMessage } from "../../services/messageService";


interface MessageButtonsProps {
    type?: string;
    from?: string;
    to?: string;
    messageId?: string;
    setEditBoolean: (editMessage: boolean) => void;
};

export const MessageButtons: FC<MessageButtonsProps> = ({ type, from, to, messageId, setEditBoolean }) => {
    const { value: userName } = useLocalStorage("name");
    const [appearButtons, setAppearButtons] = useState(true);
    const [loadingDelete, setLoadingDelete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppearButtons(false)
        }, 180000);

        return () => clearTimeout(timer);
    }, []);


    const handleDeleteMessage = async () => {
        try {
            setLoadingDelete(true);
            await deleteMessage(userName, messageId)
        } catch (error) {
            console.log(error);
            alert("Mensagem não pode ser apagada no momento.")
        }
    };

    if ((type !== "status" && (from === userName) && appearButtons)) {
        return (
            <Buttons>
                <Tooltip title="Você tem apenas 3 minutos para deletar ou excluir uma mensagem." arrow placement="top-start">
                    <Container style={{
                        height: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        background: "#AAA",
                        borderRadius: "10px"
                    }}>
                        <div className="edit-button button-style" onClick={() => { setEditBoolean(true) }}>
                            <MdEdit />
                        </div>
                        <div className="delete-button button-style" onClick={handleDeleteMessage}>
                            {loadingDelete ? <IoReloadCircle className="rotate" /> : <MdDelete />}
                        </div>
                    </Container>
                </Tooltip>
            </Buttons>
        )
    }
};

const Buttons = styled.div`
    width: 80px;

    .buttonStyle {
        @keyframes girar {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

    }

    .rotate {
        display: inline-block;
        animation: girar 2s linear infinite;
        color: #d62f2fa8
    }
    `;