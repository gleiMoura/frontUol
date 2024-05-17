//react
import styled from "styled-components";
import { FC } from "react";
//components
import { HeaderComponent } from "../components/HomeHeaderComponent/Header";
import { InsertName } from "../components/LoginComponent/InsertName";


export const InsertNamePage: FC = () => {
    return (
        <>
            <MyInsertNamePage>
                <HeaderComponent setOpenContact={() => false} />
                <InsertName />
            </MyInsertNamePage>

        </>
    )
};

//components
const MyInsertNamePage = styled.div`
    height: 100%;
`;