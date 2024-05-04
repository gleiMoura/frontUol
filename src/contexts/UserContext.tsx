import { createContext, FC, ReactNode, useContext, useState } from "react";
import { userType } from "../interfaces/messageInterface";

const defaultContextValue: userType = {
    name: "",
    setName: () => { }
}

const UserContext = createContext<userType>(defaultContextValue);

export function useNameFromUser() {
    return useContext(UserContext);
};

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [name, setName] = useState<string>("");

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    )
};