//react
import styled from "styled-components";
import { FC } from "react";
//components
import { HeaderComponent } from "../components/Header";
import { InsertName } from "../components/InsertName";


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