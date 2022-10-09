import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Avatar = styled.img`
  margin: -10px -20px -10px 15px;
  /* width: 30px; */
  width: ${(props) => (props.size ? props.size : "30px")};
  height: auto;
  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.437) 0px 2px 8px 0px;
  transition: 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const SingleAvatar = ({ avatar, size }) => {
  return (
    <Link to={`/MemberProfile/${avatar}`}>
      <Avatar src={"/avatar/" + avatar} alt="user_picture" size={size} />
    </Link>
  );
};

export default SingleAvatar;
