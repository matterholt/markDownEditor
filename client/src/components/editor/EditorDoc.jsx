import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'



import EditorActions from "./EditorActions";
import SavedFiles from "../documentFeatures/SavedFiles";



const savedDoc = css`
  grid-row: 2;
  grid-column: 1;
  list-style: none;
  padding: 15px;
`;
const doc_container = css`
  margin: 10px;
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  grid-template-rows: 50px 1fr;
  min-height: 100vh;
`;
const page_container = css`
  display: flex;
  flex-flow: row;
  justify-content: center;
  font-size: 10px;
  margin: 15px;
  grid-row: 2;
  grid-column: 2;
`;

function EditorDoc({ children, currentMarkdownHandlers }) {
 

  const [currentDocTitle, setCurrentDocTitle] = useState();
  const savedFiles  = [];

  return (
    <div css={doc_container}>
      <EditorActions
        currentMarkdownHandlers={currentMarkdownHandlers}
        docTitleHandlers={{ currentDocTitle, setCurrentDocTitle }}
      />
      <aside css={savedDoc}>
        <SavedFiles savedFiles={savedFiles} />
      </aside>
      <main css={page_container}>{children}</main>
    </div>
  );
}

export default EditorDoc;
