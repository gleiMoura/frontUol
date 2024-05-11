import { useCallback, useState } from "react";
import { createUser } from "../services/participantService";
import { useErrorMessage } from "../contexts/ErrorContext";

export const useCreateName = () => {
    const [loadingName, setLoadingName] = useState(false);
    const { setErrorText } = useErrorMessage();

    const create = useCallback(async (name: string | null) => {
        try {
            setLoadingName(true)
            await createUser(name);
        } catch (e: any) {
            console.log("erro", e)
            setErrorText(e?.response?.data[0]?.message || e?.response?.data || 'Erro inesperado. Tente novamente mais tarde!');
        } finally {
            setLoadingName(false);
        }
    }, []);

    return { loadingName, create }
};