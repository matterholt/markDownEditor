import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";



const docSheetStyle = css`
  background-color: #f7f7f7;
  max-width: 75vw;
  min-width: 50%;
  min-height: 100vh;
  padding: 15px;
  margin: 2px;
  border-radius: 10px;
`;
const Temp_style={fontSize:`${12}px`}

const DocSheet = ({ children }) => {

  
  return (
    <div css={docSheetStyle} >
      {children}
    </div>
  );
};

export default DocSheet