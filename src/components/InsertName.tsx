import styled from "styled-components";
import { FC, ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorMessage } from "../contexts/ErrorContext";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { useCreateName } from "../hooks/useCreateName";
import useLocalStorage from "../hooks/useLocalSorage";

export const InsertName: FC = () => {
    const navigate = useNavigate();
    const { errorText, setErrorText } = useErrorMessage();
    const { loadingName, errorName, create } = useCreateName();
    const [name, setName] = useState("");
    const { setDataInLocalStorage } = useLocalStorage("");

    useEffect(() => {
        setDataInLocalStorage("name", "");
    }, []);

    const handleInputchange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEnterKey = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            await create(name);
            if (!errorName) {
                setDataInLocalStorage("name", name);
                navigate("/home")
            } else {
                setErrorText(errorName)
            }
        }
    };

    return (
        <>
            <MainInsertName>
                <StyleSheetManager shouldForwardProp={prop => isPropValid(prop) && prop !== 'error'}>
                    <Section errortextcolor={errorText}>
                        <InsertNameInput
                            placeholder="Qual é o seu nome?"

                            onKeyDown={handleEnterKey}
                            onChange={handleInputchange}
                        />
                        {errorText ? <p>{errorText}</p> : <>
                            <p>Deve conter apenas letras e números.</p>
                            <p>Sem acentos.</p>
                        </>}
                        <Button
                            onClick={async () => {
                                await create(name);
                                setDataInLocalStorage("name", name);
                                navigate("/home")
                            }}
                            disabled={loadingName}
                        >
                            {loadingName ? 'Carregando...' : 'Entrar no Chat'}
                        </Button>
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

const Section = styled.div<{ errortextcolor: string }>`
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
    color: ${(props) => props.errortextcolor ? "red" : "black"};
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