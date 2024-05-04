import { createContext, FC, ReactNode, useContext, useState } from "react";
import { errorType } from "../interfaces/messageInterface";

const defaultContextValue: errorType = {
    errorText: "",
    setErrorText: () => { }
}

const ErrorContext = createContext<errorType>(defaultContextValue);

export function useErrorMessage() {
    return useContext(ErrorContext);
};

export const ErrorProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [errorText, setErrorText] = useState<string>("");

    return (
        <ErrorContext.Provider value={{ errorText, setErrorText }}>
            {children}
        </ErrorContext.Provider>
    )
};