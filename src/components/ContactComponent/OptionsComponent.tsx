import styled from "styled-components";
import { FC, ReactNode } from "react";

interface OptionsComponentProp {
    handleClosePopUp: () => void;
    openContact: boolean;
    withInput: boolean;
    firstTitle: string,
    secondTitle: string,
    firstChildren: ReactNode;
    secondChildren: ReactNode;
}

export const OptionsComponent: FC<OptionsComponentProp> = ({
    openContact,
    handleClosePopUp,
    withInput,
    firstTitle,
    secondTitle,
    firstChildren,
    secondChildren
}) => {
    return (
        <>
            <MyContactPopUp popUpOpened={openContact} onClick={handleClosePopUp} />
            <PopUp>
                <Header>
                    <h1>
                        {firstTitle}
                    </h1>
                    {withInput && <SearchContact placeholder="Ache um contato..." />}
                </Header>
                <Contacts>
                    {firstChildren}
                </Contacts>

                <Header>
                    <h1>
                        {secondTitle}
                    </h1>
                </Header>
                <Contacts>
                    {secondChildren}
                </Contacts>
            </PopUp>
        </>
    )
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
    font-size: 1rem;
    font-family: 'Roboto';
`;

const Contacts = styled.div`
    height: auto;
    max-height: 200px;
    overflow-y: scroll;
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

const SearchContact = styled.input`
    width: 60%;
    height: 30px;
    margin-top: 20px;
    padding: 5px;
    outline: none;
    font-size: 1rem;
    font-family: 'Roboto';
`;
