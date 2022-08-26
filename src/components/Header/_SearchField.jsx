import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Input from "../Input/Input_Search";
import { device } from "../../shared/breakpoints";

const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 140px;

  @media ${device.phone_Small} {
    width: 240px;
  }

  @media ${device.phone} {
    width: 300px;
  }
`;

const SearchIconWrap = styled.button`
  display: grid;
  place-items: center;
  position: absolute;
  left: 2px;
  top: 7px;

  color: ${({ theme }) => theme.main_Font_Color};

  border: none;
  background-color: transparent;

  opacity: ${(props) => (props.icon_Opacity === "full" ? "1" : "0.6")};
  cursor: pointer;
  transition: 0.3s ease;
  transform: scale(0.9);

  &:hover {
    opacity: 0.8;
  }
`;

const InputStyle = {
  width: "100%",
  padding: "11px 12px 11px 38px",
};

const SearchField = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search submitted");
  };

  return (
    <SearchContainer onSubmit={(e) => handleSubmit(e)}>
      <SearchIconWrap icon_Opacity={search.length > 0 ? "full" : ""}>
        <SearchIcon />
      </SearchIconWrap>

      <Input style={InputStyle} value={search} setValue={setSearch} />
    </SearchContainer>
  );
};

export default SearchField;
