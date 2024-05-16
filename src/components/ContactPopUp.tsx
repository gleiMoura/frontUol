import { FC } from "react"
import styled from "styled-components";
import { IoPeopleSharp, IoPersonCircleSharp } from "react-icons/io5";
import { IoIosUnlock, IoIosLock } from "react-icons/io";
import { useFetchParticipants } from "../hooks/useFetchParticipants";
import { userType } from "../interfaces/messageInterface";
import { GenericSkeleton } from "./GenericSkeleton";
import { useMessageContext } from "../contexts/messageContext";

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

    if (loadingUsers && !participants) {
        return <>
            <MyContactPopUp popUpOpened={openContact} onClick={handleClosePopUp} />
            <PopUp>
                <Header>
                    <h1>
                        Escolha um contato para enviar mensagem.
                    </h1>
                </Header>
                <div className="everybody">
                    <GenericSkeleton height={40} marginTop="5px" number={6} />
                </div>
            </PopUp>
        </>
    } else {
        return (
            <>
                <MyContactPopUp popUpOpened={openContact} onClick={handleClosePopUp} />
                <PopUp>
                    <Header>
                        <h1>Escolha um contato para enviar mensagem.</h1>
                        <SearchContact placeholder="Ache um contato..." />
                    </Header>
                    <div className="everybody">
                        <Button checked={userMessage.to === "todos"} onClick={() => {
                            setUserMessage(prevState => ({
                                ...prevState,
                                to: "todos"
                            }))
                        }}>
                            <div className="content">
                                <IoPeopleSharp className="icon" />
                                <p>Todos</p>
                            </div>
                            <div className="checked">
                                checked
                            </div>
                        </Button>
                        {participants?.map((user: userType) => {
                            return (
                                <Button checked={user.name === userMessage.to} onClick={() => {
                                    setUserMessage(prevState => ({
                                        ...prevState,
                                        to: user.name
                                    }));
                                }}>
                                    <div className="content">
                                        <IoPersonCircleSharp className="icon" />
                                        <p>{user.name}</p>
                                    </div>
                                    <div className="checked">
                                        checked
                                    </div>
                                </Button>
                            )
                        })}
                    </div>
                    <Header>
                        <h1>Escolha a visibilidade</h1>
                    </Header>
                    <div className="everybody">
                        <Button>
                            <div className="content">
                                <IoIosUnlock className="icon" />
                                <p>Público</p>
                            </div>
                            <div className="checked">
                                checked
                            </div>
                        </Button>
                        <Button>
                            <div className="content">
                                <IoIosLock className="icon" />
                                <p>Privado</p>
                            </div>
                            <div className="checked">
                                checked
                            </div>
                        </Button>
                    </div>
                </PopUp >
            </>
        )
    }
};

const MyContactPopUp = styled.main<{ popUpOpened: boolean }>`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: ${(props) => props.popUpOpened ? "block" : "none"};
    font-size: 1rem;
    cursor: pointer;
`;

const PopUp = styled.div`
    position: fixed;
    right: 0;
    width: 75%;
    max-width: 500px;
    height: 100vh;
    background-color: #fff;

    .everybody{
        height: auto;
        max-height: 200px;
        overflow-y: scroll;
    }
`;

const Header = styled.header`
    width: 100%;
    min-height: 20vh;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Roboto';
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Button = styled.div<{ checked: string }>`
    width: 100%;
    height: 40px;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-top: 5px;
    font-size: 1rem;
    font-family: 'Roboto';
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        display: flex;
        align-items: center;
    };

    .icon{
        font-size: 2rem;
        margin-right: 10px;
    };

    .checked {
        display: ${(props) => props.checked ? "block" : "none"};
    }
`;

const SearchContact = styled.input`
    width: 60%;
    height: 30px;
    margin-top: 20px;
    padding: 5px;
    outline: none;
    font-size: 1rem;
    font-family: 'Roboto';
`;
