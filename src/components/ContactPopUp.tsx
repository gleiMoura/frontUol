import { FC } from "react"
import styled from "styled-components";

interface ContactProp {
    openContact: boolean;
    setOpenContact: (openContact: boolean) => void;
}

export const ContactPopUp: FC<ContactProp> = ({ openContact, setOpenContact }) => {

    const handleClosePopUp = () => {
        setOpenContact(false);
    };

    return (
        <>
            <MyContactPopUp popUpOpened={openContact} onClick={handleClosePopUp}>

            </MyContactPopUp>
        </>
    )
};

const MyContactPopUp = styled.main<{ popUpOpened: boolean }>`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: ${(props) => props.popUpOpened ? "block" : "none"};
`;
