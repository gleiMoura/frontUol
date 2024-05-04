import styled from "styled-components";
import { FC, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useNameFromUser } from "../contexts/UserContext";

export const InsertName: FC = () => {
    const navigate = useNavigate();
    const { setName } = useNameFromUser();

    const handleInputchange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    return (
        <>
            <MainInsertName>
                <Section>
                    <InsertNameInput placeholder="Qual é o seu nome?" onChange={handleInputchange} />

                    <p>Deve conter apenas letras e números.</p>
                    <p>Sem acentos.</p>

                    <Button onClick={() => { navigate("/Home") }}>Entrar no Chat</Button>
                </Section>
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

const Section = styled.div`
    width:50%;
    height: 50%;
    min-width: 300px;
    max-width: 500px;
    background-color: #FFDEDE;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: black;
    font-family: 'Roboto';
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