/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";

import HtmlConvertContainer from "./HtmlConvertContainer";


const inputContainer = css`
  border-bottom: 1px solid white;
  font-size: 1em;
`;

// possibly remove
const pre = css`
  color: rgb(157, 174, 198);
  padding: 5px;
  margin: 0;
  min-height: inherit;
  white-space: pre-wrap;
`;


const MkdownOut = ({
  currentMarkdownRaw,
  updateSelectInput,
  mkInputDomRef,
}) => {
  return (
    <div css={inputContainer}>
      {currentMarkdownRaw.map((mdUserLine) => (
        <HtmlConvertContainer
          key={mdUserLine.lineId}
          mdUserLine={mdUserLine}
          updateSelectInput={updateSelectInput}
          mkInputDomRef={mkInputDomRef}
        />
      ))}
    </div>
  );
};



export default MkdownOut;