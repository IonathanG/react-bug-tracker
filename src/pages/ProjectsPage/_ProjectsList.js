import React from "react";
import styled from "styled-components";
import {
  Block,
  BlockHeader,
  BlockOptions,
  BlockListContainer,
  BlockCategoryTitle,
  BlockCategoryContainer,
  BlockCategoryItem,
} from "../Shared/Block";

const ProjectsContainer = styled(Block)`
  width: 100%;
  //height: 100%;
  margin-top: 50px;
`;

const ProjectsHeader = styled(BlockHeader)``;

const ProjectsOptions = styled(BlockOptions)``;

const ListContainer = styled(BlockListContainer)`
  div:nth-child(1) {
    flex: 2;
  }
  div:nth-child(2) {
    flex: 5;
  }
  div:nth-child(3) {
    flex: 1;
  }
`;

const CategoryTitle = styled(BlockCategoryTitle)``;

const CategoryContainer = styled(BlockCategoryContainer)`
  font-size: 14px;
`;

const CategoryItem = styled(BlockCategoryItem)`
  padding: 12px;
`;

const ProjectsList = ({ projectsList }) => {
  return (
    <ProjectsContainer>
      <ProjectsHeader>
        <span>Your Projects</span>
        <span>All the Projects from your database</span>
      </ProjectsHeader>
      <ProjectsOptions>
        <div>Show X entries</div>
        <div>Search</div>
      </ProjectsOptions>
      <ListContainer>
        <div>
          <CategoryTitle>Project Name</CategoryTitle>
          <CategoryContainer>
            {projectsList.map((item) => (
              <CategoryItem key={item.id}>{item.project_name}</CategoryItem>
            ))}
          </CategoryContainer>
        </div>
        <div>
          <CategoryTitle>Description</CategoryTitle>
          <CategoryContainer>
            {projectsList.map((item) => (
              <CategoryItem key={item.id}>{item.description}</CategoryItem>
            ))}
          </CategoryContainer>
        </div>
        <div>
          <CategoryTitle>...</CategoryTitle>
          <CategoryContainer>
            {projectsList.map((item) => (
              <CategoryItem key={item.id}>{item.id}</CategoryItem>
            ))}
          </CategoryContainer>
        </div>
      </ListContainer>
    </ProjectsContainer>
  );
};

export default ProjectsList;
