import api from ".";

export const updateParcipant = async (user: string) => {
    const config = {
        headers: {
            'User': user
        }
    };

    await api.post("/status",{}, config);
};