import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import ButtonBasic from "../../Buttons/Button_Basic";
import SingleAvatar from "../../Avatar/SingleAvatar";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const DevInfo = styled.div`
  display: grid;
  place-items: center;
  /* margin-top: 20px; */
`;

const DevWrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const DevName = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const DevEmail = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.card_subTitle};
`;

const DevIcon = styled(PersonIcon)`
  transform: scale(5);
  margin: 50px 0px 40px 0px;
`;

const AssignDevCurrentDev = ({ currentDev }) => {
  // Retrieving State
  const users = useSelector((state) => state.users.Users);

  return (
    <Container>
      <Title>Current Developer</Title>

      <DevInfo>
        {currentDev !== "" && (
          <DevWrap>
            <SingleAvatar
              avatar={users[currentDev]?.user_avatar}
              size={"100px"}
            />
            <DevName>{users[currentDev]?.user_name}</DevName>
            <DevEmail>{users[currentDev]?.user_email}</DevEmail>
            <ButtonBasic text={"Profile"} />
          </DevWrap>
        )}

        {currentDev === "" && (
          <>
            <DevIcon />
            <DevName>Not Assigned</DevName>
          </>
        )}
      </DevInfo>
    </Container>
  );
};

export default AssignDevCurrentDev;
