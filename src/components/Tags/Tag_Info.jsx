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

const TagInfo = ({ tagText, tagColor = null }) => {
  // Pick the Tag Color
  const handleTagColor = () => {
    if (tagColor) {
      switch (tagColor) {
        case "Cyan":
          return "rgb(73,197,182)";
        case "Grey":
          return "rgb(156,156,156)";
        case "Red":
          return "rgb(220,52,68)";
        case "Blue":
          return "rgb(92,142,212)";
        case "Green":
          return "rgb(39,167,68)";
        default:
          return "";
      }
    } else {
      switch (tagText?.toUpperCase()) {
        case "Cyan":
          return "rgb(73,197,182)";
        case "LOW":
          return "rgb(156,156,156)";
        case "URGENT":
          return "rgb(220,52,68)";
        case "HIGH":
          return "rgb(244,173,2)";
        case "MEDIUM":
          return "rgb(92,142,212)";
        case "DEVELOPMENT":
          return "rgb(92,142,212)";
        case "NEW":
          return "rgb(39,167,68)";
        case "RESOLVED":
          return "rgb(39,167,68)";
        default:
          return "";
      }
    }
  };

  return <Tag color={handleTagColor()}>{tagText}</Tag>;
};

export default TagInfo;
