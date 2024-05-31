import api from ".";
import { messageType } from "../interfaces/messageInterface";

export const fetchMessages = async (user: string) => {
    const config = {
        headers: {
            'User': user
        }
    };

    return (
        await api.get('/messages/?limit=20', config)
    )
};

export const sendMessage = async (user: string, message: messageType) => {
    const config = {
        headers: {
            'User': user
        }
    };

    return (
        await api.post('/messages', message, config)
    )
};

export const deleteMessage = async (user: string, id?: string) => {
    const config = {
        headers: {
            'User': user
        }
    };

    return (
        await api.delete(`/messages/${id}`, config)
    );
}
