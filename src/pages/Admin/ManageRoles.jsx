import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";
import BasicTable from "../../components/Tables/BasicTable";
import { Manage_Roles } from "../../data/TableColumns";
//import { device } from "../../shared/breakpoints";

const Container = styled.div``;

const ManageRoles = () => {
  const users = useSelector((state) => state.users.Users);

  const defaultSortBy = useMemo(
    () => [
      {
        id: "project_name",
        desc: false,
      },
    ],
    []
  );

  // Retrieves all Users
  // Array to be displayed into the BasicTable component
  const tableData = useMemo(() => {
    const usersArray = users ? Object.values(users) : [];
    let formattedData = [];

    formattedData = usersArray.map((user) => ({
      user_id: user.user_id,
      avatar: user.user_avatar,
      name_contact: { name: user.user_name, email: user.user_email },
      currentRole: user.user_role,
      manageRole: user.user_role,
      action: user.user_id,
    }));
    return formattedData;
  }, [users]);

  return (
    <Container>
      <Navigation headerText={"Manage Roles"} />
      <BasicTable
        COLUMNS={Manage_Roles}
        DATA={tableData}
        defaultSortBy={defaultSortBy}
      />
    </Container>
  );
};

export default ManageRoles;
