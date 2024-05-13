import { useEffect, useState } from "react";
import { messageType } from "../interfaces/messageInterface";
import { fetchMessages } from "../services/messageService";
import { AxiosResponse } from "axios";
import { useErrorMessage } from "../contexts/ErrorContext";

export const useFetchMessages = (user: string) => {
    const [messages, setMessages] = useState<messageType[]>([]);
    const [loadingMessages, setLoadingMessages] = useState(true);
    const { setErrorText } = useErrorMessage();

    const fetchData = async () => {
        try {
            const response: AxiosResponse = await fetchMessages(user);
            setMessages(response.data);
        } catch (e) {
            console.log(e)
            setErrorText('Erro ao carregar dados!');
            setMessages([]);
        } finally {
            setLoadingMessages(false);
        }
    };


    useEffect(() => {
        setInterval(fetchData, 3000)
    }, []);

    return { messages, loadingMessages }
};