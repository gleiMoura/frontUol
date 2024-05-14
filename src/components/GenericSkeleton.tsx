import { Skeleton } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

interface GenericSkeletonProp {
    number: number;
    marginTop: string;
    height: number;
}

export const GenericSkeleton: FC<GenericSkeletonProp> = ({ number, marginTop, height }) => {
    return (
        <>
            {
                Array.from({ length: number }, (_, index) => (
                    <SkeletonBox key={index}>
                        <Skeleton style={{ marginTop: `${marginTop}` }} variant="rectangular" width={'100%'} height={height} key={index} />
                    </SkeletonBox>
                ))
            }
        </>
    )
};

const SkeletonBox = styled.div`
    width: 100%;
    flex: none;
`