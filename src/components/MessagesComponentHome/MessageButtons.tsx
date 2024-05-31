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
    messageId?: string
};

export const MessageButtons: FC<MessageButtonsProps> = ({ type, from, to, messageId }) => {
    const { value: userName } = useLocalStorage("name");
    const [appear, setAppear] = useState(true);
    const [loadingDelete, setLoadingDelete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppear(false)
        }, 36000000);

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

    if ((type !== "status" && (from === userName || to === userName) && appear)) {
        return (
            <Buttons>
                <Tooltip title="Exclusão e deleção duram apenas 10 minutos" arrow placement="top-start">
                    <Container style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px"
                    }}>
                        <div className="edit-button button-style">
                            {false ? <IoReloadCircle className="rotate" /> : <MdEdit />}
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