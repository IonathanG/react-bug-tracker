import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input/InputSearch";
import { device } from "../../shared/breakpoints";

const SearchContainer = styled.form`
  position: relative;
  width: 180px;

  display: flex;
  align-items: center;

  @media ${device.phone} {
    display: none;
  }
`;

const SearchIconContainer = styled.button`
  cursor: pointer;
  position: absolute;
  right: 2px;
  top: 7px;

  display: grid;
  place-items: center;

  background-color: transparent;
  border: none;

  transition: 0.3s ease;
  transform: scale(0.75);
  opacity: ${(props) => (props.opacity === "full" ? "0.6" : "0.3")};

  &:hover {
    opacity: 0.6;
  }
`;

const InputStyle = {
  padding: "12px 14px",
};

const SearchField = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("top search submitted");
  };

  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e)}>
      {/* Input Search */}
      <Input style={InputStyle} value={search} setValue={setSearch} />

      {/* Search Icon Submit */}
      <SearchIconContainer opacity={search.length > 0 ? "full" : ""}>
        <SearchIcon />
      </SearchIconContainer>
    </SearchContainer>
  );
};

export default SearchField;
