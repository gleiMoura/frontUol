import { useCallback, useState } from "react";
import { createUser } from "../services/participantService";
import { useErrorMessage } from "../contexts/ErrorContext";

export const useCreateName = () => {
    const [loadingName, setLoadingName] = useState(false);
    const { setErrorText } = useErrorMessage();

    const create = useCallback(async (name: string | null) => {
        setTimeout(() => {
            setErrorText("Erro inesperado. Tente novamente mais tarde!");
            setLoadingName(false);
        }, 10000);

        try {
            setLoadingName(true)
            await createUser(name);
        } catch (e: any) {
            setErrorText(e?.response?.data[0].message || e.response.data || 'Erro inesperado. Tente novamente mais tarde!');
        } finally {
            setLoadingName(false);
        }
    }, []);

    return { loadingName, create }
};