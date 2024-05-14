import { useEffect, useState } from "react";
import { getParticipants } from "../services/participantService";
import { userType } from "../interfaces/messageInterface";
import { AxiosResponse } from "axios";
import { useErrorMessage } from "../contexts/ErrorContext";

export const useFetchParticipants = () => {
    const [participants, setParticipants] = useState<userType[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const { setErrorText } = useErrorMessage()

    const fetchData = async () => {
        try {
            const users: AxiosResponse = await getParticipants();
            setParticipants(users.data);
        } catch (e) {
            setErrorText('Erro ao carregar participantes!')
        } finally {
            setLoadingUsers(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { participants, loadingUsers }
};