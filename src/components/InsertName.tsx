//react
import styled from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { FC, ChangeEvent, KeyboardEvent, useState } from "react";
import { StyleSheetManager } from "styled-components";
//hooks
import useLocalStorage from "../hooks/useLocalSorage";
import { useNavigate } from "react-router-dom";
import { useErrorMessage } from "../contexts/ErrorContext";
import { useCreateName } from "../hooks/useCreateName";

export const InsertName: FC = () => {
    const navigate = useNavigate();
    const { errorText } = useErrorMessage();
    const { loadingName, create } = useCreateName();
    const [name, setName] = useState("");
    const { setDataInLocalStorage } = useLocalStorage("");

    const handleInputchange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEnterKey = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            await create(name);
            !errorText &&
                setDataInLocalStorage("name", name);
            navigate("/home");
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
                            disabled={loadingName}
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

//styled-components
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
