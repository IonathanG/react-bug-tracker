import React from "react";
import styled from "styled-components";
import BlockTypeData from "../../components/Blocks/Block_TypeData";

const ProjectsContainer = styled.div`
  width: 100%;
  margin-top: 0px;
`;
const Styles = {
  EntryFlex: ["3", "3", "3", "2", "3", "3"],
  EntryItem: { padding: "4px 0", fontSize: "13px" },
  ShowOptions: true,
};

const HeaderText = {
  mainText: "Tickets for this Project",
  subText: "Condensed Ticket Details",
};
const ListCategories = [
  "Title",
  "Submitter",
  "Developer",
  "Status",
  "Created",
  "",
];

const Links = [{ title: "More Details", route: "ticket" }];

const TicketsAssigned = ({ ticketList }) => {
  return (
    <ProjectsContainer>
      <BlockTypeData
        Styles={Styles}
        HeaderText={HeaderText}
        ListCategories={ListCategories}
        ListData={ticketList}
        Links={Links}
      />
      {/* {tickets.map((item, index) => (
          <EntryFlexList key={index}>
            <EntryItem>
              <span>{item.title}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.submitter}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.developer}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.status}</span>
            </EntryItem>
            <EntryItem>
              <span>{item.created}</span>
            </EntryItem>
            <EntryItem>
              <span>{index}</span>
            </EntryItem>
          </EntryFlexList>
        ))} */}
    </ProjectsContainer>
  );
};

export default TicketsAssigned;
