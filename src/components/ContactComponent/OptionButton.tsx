import { FC, ReactNode, MouseEventHandler } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

interface OptionButtonProp {
    checked: boolean,
    handleOnclick: MouseEventHandler<HTMLButtonElement>,
    icon: ReactNode,
    name: string,
    disabled: boolean
}

export const OptionButton: FC<OptionButtonProp> = ({
    checked,
    handleOnclick,
    icon,
    name,
    disabled
}) => {
    return (
        <Button checked={checked} onClick={handleOnclick} disabled={disabled}>
            <div className="content">
                <div className="icon">
                    {icon}
                </div>
                <p>{name}</p>
            </div>
            <div className="checked">
                <FaCheck />
            </div>
        </Button>
    )
};

const Button = styled.button<{ checked: boolean }>`
    width: 100%;
    height: 40px;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-top: 5px;
    border: none;
    background-color: #fff;
    font-size: 1rem;
    font-family: 'Roboto';
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
        display: flex;
        align-items: center;
    };

    .icon{
        font-size: 2rem;
        margin-right: 10px;
    };

    .checked {
        display: ${(props) => props.checked ? "block" : "none"};
        font-size: 1rem;
        color: green
    }
`;
