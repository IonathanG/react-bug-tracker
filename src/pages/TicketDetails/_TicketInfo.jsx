import React from "react";
import styled from "styled-components";
import BlockTypeInfo from "../../components/Blocks/Block_TypeInfo";

const ProjectContainer = styled.div`
  margin-top: 50px;
`;

const Styles = {
  EntryFlex: ["1", "1", "1"],
  EntryItem: { padding: "12px 10px", fontSize: "14px" },
};

const HeaderText = {
  mainText: "Details for Ticket #",
};

const Links = [
  { title: "Back to list", route: "tickets" },
  { title: "Edit Ticket", route: "tickets" },
];

const ListItem = [
  [
    { name: "Ticket Title", description: "Great Work" },
    { name: "Ticket Description", description: "Keep on the good work buddy" },
  ],
  [
    { name: "Assigned Developer", description: "Tromso Eleven" },
    { name: "Submitter", description: "Tromso Twelve" },
  ],
  [
    { name: "Project", description: "Project 1" },
    { name: "Ticket Priority", description: "Medium" },
  ],
  [
    { name: "Ticket Status", description: "Open" },
    { name: "Ticket Type", description: "Bugs/Errors" },
  ],
  [
    { name: "Created", description: "11/11/22 11:11:11PM" },
    { name: "Updated", description: "21/11/22 11:11:11PM" },
  ],
];

const TicketInfo = () => {
  return (
    <ProjectContainer>
      <BlockTypeInfo
        Styles={Styles}
        HeaderText={HeaderText}
        Links={Links}
        ListItem={ListItem}
      />
    </ProjectContainer>
  );
};

export default TicketInfo;
