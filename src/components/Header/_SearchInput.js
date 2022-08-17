import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import SearchIcon from "@mui/icons-material/Search";
import { InputField } from "../../shared/inputField";

const SearchContainer = styled.form`
  //flex: 1;
  //transition: 0.3s ease-out;
  display: flex;
  align-items: center;
  position: relative;

  /* @media ${device.phone} {
  } */
`;

const SearchIconWrap = styled.button`
  display: grid;
  place-items: center;
  position: absolute;
  left: 2px;
  top: 7px;

  border: none;
  background-color: transparent;

  opacity: 0.6;
  cursor: pointer;
  transition: 0.3s ease;
  transform: scale(0.9);

  &:hover {
    opacity: 0.8;
  }
`;

const SearchInputField = styled(InputField)`
  width: 300px;
  padding: 11px 12px 11px 38px;

  &::placeholder {
    font-size: 14px;
  }
`;

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e)}>
      <SearchIconWrap>
        <SearchIcon />
      </SearchIconWrap>
      <SearchInputField
        name="search"
        type="text"
        placeholder="Search Files..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </SearchContainer>
  );
};

export default SearchInput;
