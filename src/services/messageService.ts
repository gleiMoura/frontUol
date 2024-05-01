import api from ".";

export const fetchMessages = async () => {
    return (
        await api.get('/messages')
    )
};