import styled from "styled-components";
import { FC } from "react";
import { HeaderComponent } from "../components/Header";
import { InsertName } from "../components/InsertName";


export const InsertNamePage: FC = () => {
    return (
        <>
            <MyInsertNamePage>
                <HeaderComponent />
                <InsertName />
            </MyInsertNamePage>

        </>
    )
};

const MyInsertNamePage = styled.div`
    height: 100%;
`;