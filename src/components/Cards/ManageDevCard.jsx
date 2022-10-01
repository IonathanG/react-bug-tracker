import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const ManageDevCard = ({ projectMembers }) => {
  return <CardContainer></CardContainer>;
};

export default ManageDevCard;
