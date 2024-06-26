//react
import styled from "styled-components";
import { FC } from "react";
//components
import { HeaderComponent } from "../components/HeaderComponentHome/Header";
import { InsertName } from "../components/LoginComponent/InsertName";


export const InsertNamePage: FC = () => {
    return (
        <>
            <MyInsertNamePage>
                <HeaderComponent setOpenContact={() => false} name={"..."} />
                <InsertName />
            </MyInsertNamePage>

        </>
    )
};

//components
const MyInsertNamePage = styled.div`
    height: 100%;
`;