import api from ".";

export const fetchMessages = async () => {
    const config = {
        headers: {
            'User': 'Joao'
        }
    };
    
    return (
        await api.get('/messages/?limit=10', config)
    )
};