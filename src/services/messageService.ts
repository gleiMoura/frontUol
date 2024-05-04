import api from ".";

export const fetchMessages = async (user: string) => {
    const config = {
        headers: {
            'User': user
        }
    };

    return (
        await api.get('/messages/?limit=10', config)
    )
};