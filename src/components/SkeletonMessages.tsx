import { Skeleton } from "@mui/material";
import { FC } from "react";

export const SkeletonMessages: FC = () => {
    return (
        <>
            {
                Array.from({ length: 15 }, (_, index) => (
                    <Skeleton style={{marginTop: '5px'}} variant="rectangular" width={'100%'} height={50} key={index} />
                ))
            }
        </>
    )
};