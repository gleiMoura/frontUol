import { FC } from "react"
import styled from "styled-components";
import { IoPeopleSharp, IoPersonCircleSharp } from "react-icons/io5";
import { useFetchParticipants } from "../hooks/useFetchParticipants";
import { userType } from "../interfaces/messageInterface";


interface ContactProp {
    openContact: boolean;
    setOpenContact: (openContact: boolean) => void;
}

export const ContactPopUp: FC<ContactProp> = ({ openContact, setOpenContact }) => {
    const { participants, loadingUsers } = useFetchParticipants();

    const handleClosePopUp = () => {
        setOpenContact(false);
    };

    if (loadingUsers || !participants) {
        return <>
            <MyContactPopUp popUpOpened={openContact} onClick={handleClosePopUp} />
            <p>Loading...</p>
        </>
    } else {
        return (
            <>
                <MyContactPopUp popUpOpened={openContact} onClick={handleClosePopUp} />
                <PopUp>
                    <Title>
                        <h1>
                            Escolha um contato para enviar mensagem.
                        </h1>
                    </Title>
                    <div className="everybody">
                        <Button>
                            <div className="content">
                                <IoPeopleSharp className="icon" />
                                <p>Todos</p>
                            </div>
                            <div className="checked">
                                checked
                            </div>
                        </Button>
                        {participants?.map((user: userType) => {
                            console.log(user)
                            return (
                                <Button>
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

const Title = styled.header`
    width: 100%;
    height: 70px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
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
    }
`;
