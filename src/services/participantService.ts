import api from ".";

export const createUser = async (name: string | null) => {
    return (
        await api.post('/participants', { name })
    )
};
