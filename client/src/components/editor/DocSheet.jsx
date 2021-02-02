import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { useCurrentDocOptions } from "../../context/docOption_context";

const docSheetStyle = css`
  background-color: #f7f7f7;
  max-width: 75vw;
  min-width: 50%;
  min-height: 100vh;
  padding: 15px;
  margin: 2px;
  border-radius: 10px;
`;

const DocSheet = ({ children }) => {
  const { docOption } = useCurrentDocOptions();

  
  return (
    <div
      css={css`
        ${docSheetStyle};
        font-size: ${docOption.fontSize}px;
      `}
    >
      {children}
    </div>
  );
};

export default DocSheet