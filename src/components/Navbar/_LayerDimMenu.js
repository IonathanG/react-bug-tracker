import React from "react";
import styled from "styled-components";

const LayerBackgroundDim = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  left: 0;
  top: 0;
  z-index: 10;
  filter: brightness(65%);
`;

const LayerDimMenu = () => {
  return <LayerBackgroundDim></LayerBackgroundDim>;
};

export default LayerDimMenu;
