import { useEffect, useState } from "react";
import { createUser } from "../services/participantService";

export const useCreateName = (name: string | null) => {
    const [loadingName, setLoadingName] = useState(true);
    const [errorName, setErrorName] = useState<string | null>(null);

    const create = async () => {
        try {
            await createUser(name);
        } catch (e: any) {
            setErrorName(e?.response?.data[0].message || e.response.data || 'Erro desconhecido. Tente novamente mais tarde!');
        } finally {
            setLoadingName(false);
        }
    };

    useEffect(() => {
        create();
    }, []);

    return { loadingName, errorName }
};