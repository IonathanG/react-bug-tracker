import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Avatar = styled.img`
  margin: -10px 0px -10px -10px;
  cursor: pointer;
  width: 30px;
  height: auto;
  border-radius: 50%;
  border: 2px solid rgb(255, 255, 255);
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: 0.2s ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const UserAvatars = ({ team }) => {
  return (
    <div>
      {team.map((avatar, index) => (
        <Link to={`/MemberProfile/${avatar}`} key={index}>
          <Avatar src={"/avatar/" + avatar} alt="user_picture" />
        </Link>
      ))}
    </div>
  );
};

export default UserAvatars;
