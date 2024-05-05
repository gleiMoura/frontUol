import styled from "styled-components";
import { FC, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useNameFromUser } from "../contexts/UserContext";
import { useErrorMessage } from "../contexts/ErrorContext";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

export const InsertName: FC = () => {
    const navigate = useNavigate();
    const { name, setName } = useNameFromUser();
    const { errorText } = useErrorMessage();

    const handleInputchange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) {
            navigate("Home")
        }
    };

    return (
        <>
            <MainInsertName>
                <StyleSheetManager shouldForwardProp={prop => isPropValid(prop) && prop !== 'error'}>
                    <Section errortext={errorText}>
                        <InsertNameInput placeholder="Qual é o seu nome?" onKeyDown={handleEnterKey} onChange={handleInputchange} />

                        {errorText ? <p>{errorText}</p> : <>
                            <p>Deve conter apenas letras e números.</p>
                            <p>Sem acentos.</p>
                        </>}

                        <Button onClick={() => { navigate("/Home") }} disabled={!name}>Entrar no Chat</Button>
                    </Section>
                </StyleSheetManager>
            </MainInsertName>
        </>
    )
};

const MainInsertName = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section = styled.div<{ errortext: string }>`
    width:50%;
    height: 50%;
    min-width: 300px;
    max-width: 500px;
    padding: 15px;
    background-color: #FFDEDE;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    color: ${(props) => props.errortext ? "red" : "black"};
    text-align: center;
`;

const InsertNameInput = styled.input`
    font-size: 1rem;
    border: none;
    resize: none;
    outline: none;
    padding: 5px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 5px;
    color: white;
    background-color: black;
    margin-top: 20px;
    font-family: 'Roboto';
    cursor: pointer;
    &:active {
        color: white
    }
`;