import { useEffect, useState } from "react";
import { getParticipants } from "../services/participantService";
import { userType } from "../interfaces/messageInterface";
import { AxiosResponse } from "axios";

export const useFetchParticipants = () => {
    const [participants, setParticipants] = useState<userType[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(true);

    const fetchData = async () => {
        try {
            const response: AxiosResponse = await getParticipants();
            setParticipants(response.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingUsers(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { participants, loadingUsers }
};