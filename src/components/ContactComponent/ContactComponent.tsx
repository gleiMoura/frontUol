import { FC, MouseEventHandler } from "react"
import { IoPeopleSharp, IoPersonCircleSharp } from "react-icons/io5";
import { IoIosUnlock, IoIosLock } from "react-icons/io";
import { useFetchParticipants } from "../../hooks/useFetchParticipants";
import { userType } from "../../interfaces/messageInterface";
import { useMessageContext } from "../../contexts/messageContext";
import { OptionsComponent } from "./OptionsComponent";
import { GenericSkeleton } from "../GenericSkeleton";
import { OptionButton } from "./OptionButton";

interface ContactProp {
    openContact: boolean;
    setOpenContact: (openContact: boolean) => void;
}

export const ContactPopUp: FC<ContactProp> = ({ openContact, setOpenContact }) => {
    const { participants, loadingUsers } = useFetchParticipants();
    const { userMessage, setUserMessage } = useMessageContext();

    const handleClosePopUp = () => {
        setOpenContact(false);
    };

    const handleOnclickParticipant = (name: string): MouseEventHandler<HTMLDivElement> => () => {
        setUserMessage(prevState => ({
            ...prevState,
            to: name
        }))
    };

    const handleOnclickVisibility = (type: "message" | "private_message"): MouseEventHandler<HTMLDivElement> => () => {
        setUserMessage(prevState => ({
            ...prevState,
            type
        }))
    };

    if (loadingUsers && !participants) {
        return (
            <OptionsComponent
                handleClosePopUp={handleClosePopUp}
                openContact={openContact}
                firstTitle="Escolha um contato para enviar mensagem."
                secondTitle="Escolha a visibilidade."
                firstChildren={<GenericSkeleton height={40} marginTop="5px" number={4} />}
                secondChildren={<GenericSkeleton height={40} marginTop="5px" number={2} />}
                withInput
            />
        )
    } else {
        return (
            <OptionsComponent
                handleClosePopUp={handleClosePopUp}
                openContact={openContact}
                firstTitle="Escolha um contato para enviar mensagem."
                secondTitle="Escolha a visibilidade."
                firstChildren={
                    <>
                        <OptionButton
                            checked={userMessage.to === "todos"}
                            handleOnclick={handleOnclickParticipant("todos")}
                            name="Todos"
                            icon={<IoPeopleSharp />}
                        />
                        {participants?.map((user: userType) => {
                            return (
                                <OptionButton
                                    checked={user.name === userMessage.to}
                                    handleOnclick={handleOnclickParticipant(user.name)}
                                    icon={<IoPersonCircleSharp />}
                                    name={user.name}
                                />
                            )
                        })}
                    </>
                }
                secondChildren={
                    <>
                        <OptionButton
                            checked={userMessage.type === "message"}
                            handleOnclick={handleOnclickVisibility("message")}
                            icon={<IoIosUnlock />}
                            name="Público"
                        />
                        <OptionButton
                            checked={userMessage.type === "private_message"}
                            handleOnclick={handleOnclickVisibility("private_message")}
                            icon={<IoIosLock />}
                            name="Privado"
                        />
                    </>
                }
                withInput
            />
        )
    }
};
