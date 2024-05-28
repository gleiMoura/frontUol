import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SearchComponentProp {
    handleChangeSearch?: (event: ChangeEvent<HTMLInputElement>) => void;
    search?: string
}

export const SearchComponent: FC<SearchComponentProp> = ({ handleChangeSearch, search }) => {
    return (
        <SearchContact
            type="text"
            placeholder="Encontre um contato..."
            onChange={handleChangeSearch}
            value={search}
        />
    )
};

const SearchContact = styled.input`
    width: 60%;
    height: 30px;
    margin-top: 20px;
    padding: 5px;
    outline: none;
    font-size: 1rem;
    font-family: 'Roboto';
`;
