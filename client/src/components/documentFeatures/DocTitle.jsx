/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React, { useState } from 'react'

import TitleDocChange from "./TitleDocChange"

const subTitle = css`
  margin: 0;
  padding: 10px 0;
  font-weight: 900;
  color: #fff;
`;
const Button = css`
  border: none;
  background: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 2rem;
  width: max-content;
`;

const DocTitle = ({ docTitleHandlers }) => {
  const { currentDocTitle, setCurrentDocTitle } = docTitleHandlers;
  const [fileNameStatus, setFileNameStatus] = useState("current");
  return (
    <div>
      <TitleDocChange
        status={fileNameStatus}
        currentDocTitle={currentDocTitle}
        setCurrentDocTitle={setCurrentDocTitle}
        setFileNameStatus={setFileNameStatus}
      />
      <button css={Button} onClick={() => setFileNameStatus("updateTitle")}>
        <h2 css={subTitle}>{currentDocTitle || "NEW DOC..."}</h2>
      </button>
    </div>
  );
};
export default DocTitle;