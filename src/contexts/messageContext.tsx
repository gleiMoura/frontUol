import { FC, createContext, useContext, useState, ReactNode } from "react";
import { messageType } from "../interfaces/messageInterface";

interface MessageContextType {
    userMessage: messageType;
    setUserMessage: (message: messageType) => void
};

const defaultContextValue: MessageContextType = {
    userMessage: {
        to: "",
        text: "",
        type: "message"
    },
    setUserMessage: () => { }
}

const MessageContext = createContext<MessageContextType>(defaultContextValue);

export function useMessageContext() {
    return useContext(MessageContext)
};

export const MessageProvider: FC<{ children: ReactNode }> = ({ children }: any) => {
    const [userMessage, setUserMessage] = useState<messageType>({
        to: "",
        text: "",
        type: "message"
    });
    return (
        <MessageContext.Provider value={{ userMessage, setUserMessage }}>
            {children}
        </MessageContext.Provider>
    )
}



