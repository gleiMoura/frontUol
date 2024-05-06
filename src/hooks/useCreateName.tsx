import { useCallback, useState } from "react";
import { createUser } from "../services/participantService";

export const useCreateName = () => {
    const [loadingName, setLoadingName] = useState(false);
    const [errorName, setErrorName] = useState<string | null>(null);

    const create = useCallback(async (name: string | null) => {
        try {
            setLoadingName(true)
            await createUser(name);
        } catch (e: any) {
            setErrorName(e?.response?.data[0].message || e.response.data || 'Erro desconhecido. Tente novamente mais tarde!');
        } finally {
            setLoadingName(false);
        }
    }, []);

    return { loadingName, errorName, create }
};