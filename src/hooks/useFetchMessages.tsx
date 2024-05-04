import { useEffect, useState } from "react";
import { messageType } from "../interfaces/messageInterface";
import { fetchMessages } from "../services/messageService";
import { AxiosResponse } from "axios";

export const useFetchUsers = (user: string) => {
    const [messages, setMessages] = useState<messageType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse = await fetchMessages(user);
                setMessages(response.data);
                setError(null);
            } catch (e) {
                setError('Erro ao carregar dados!');
                setMessages([]);
            } finally {
                setIsLoading(false);
            }
        };

        setInterval(fetchData, 3000)
    }, []);

    return { messages, isLoading, error }
}