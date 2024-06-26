import { useCallback, useState } from "react";
import { createUser } from "../services/participantService";
import { useErrorMessage } from "../contexts/ErrorContext";
import useLocalStorage from "./useLocalSorage";

export const useCreateName = () => {
    const [loadingName, setLoadingName] = useState(false);
    const { setErrorText } = useErrorMessage();
    const { setDataInLocalStorage } = useLocalStorage("name");

    const create = useCallback(async (name: string) => {
        try {
            setLoadingName(true)
            await createUser(name);
            setDataInLocalStorage("name", name);
            return "created"
        } catch (e: any) {
            console.log("erro", e)
            setErrorText(e?.response?.data[0]?.message || e?.response?.data || 'Erro inesperado. Tente novamente mais tarde!');
        } finally {
            setLoadingName(false);
        }
    }, []);

    return { loadingName, create }
};