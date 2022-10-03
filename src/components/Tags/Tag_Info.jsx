import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  width: fit-content;

  border: 1px solid ${(props) => props.color && props.color};
  border-radius: 4px;
  padding: 4px 8px;

  color: ${(props) => props.color && props.color};
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
`;

const TagInfo = ({ tagText, tagColor }) => {
  // Pick the Tag Color
  const handleTagColor = (color) => {
    switch (color) {
      case "Cyan":
        return "rgb(73,197,182)";
      case "Grey":
        return "rgb(156,156,156)";
      case "Red":
        return "rgb(220,52,68)";
      default:
        return "";
    }
  };

  return <Tag color={handleTagColor(tagColor)}>{tagText}</Tag>;
};

export default TagInfo;
