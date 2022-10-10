import React from "react";
import styled from "styled-components";
import TagInfo from "../../Tags/Tag_Info";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.background_Block};
  box-shadow: ${({ theme }) => theme.boxShadow_Block};
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.color_SubNavItem};
`;

const ProjectDetailsTagCard = ({ project = null }) => {
  return (
    <CardContainer>
      <InfoItem>
        <span>Created</span>
        <TagInfo tagText={project?.start_date} tagColor={"Grey"} />
      </InfoItem>
      <InfoItem>
        <span>Deadline</span>{" "}
        <TagInfo tagText={project?.end_date} tagColor={"Grey"} />
      </InfoItem>
      <InfoItem>
        <span>Priority</span>
        <TagInfo tagText={project?.priority} />
      </InfoItem>
      <InfoItem>
        <span>Status</span>
        <TagInfo tagText={project?.status} tagColor={"Cyan"} />
      </InfoItem>
    </CardContainer>
  );
};

export default ProjectDetailsTagCard;
