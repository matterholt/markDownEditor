import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import EditorActions from "./EditorActions";
import SavedFilesList from "../documentFeatures/SavedFilesList";

import { useLocalStorage } from "../../hooks/useLocalStorage";

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


// update doc File
// clear current file
// update file name


// save current file
// delete saved files
// edit a saved file

// adjust Font size

function EditorDoc({ children, currentMarkdownHandlers }) {
 
  const [localSavedFiles, setLocalSavedFiles] = useLocalStorage("savedFiles");

  const [currentDocTitle, setCurrentDocTitle] = useState();

  return (
    <div css={doc_container}>
      <EditorActions
        currentMarkdownHandlers={currentMarkdownHandlers}
        docTitleHandlers={{ currentDocTitle, setCurrentDocTitle }}
        savedFilesHandler={{ localSavedFiles, setLocalSavedFiles }}
      />
      <div css={savedDoc}>
        <SavedFilesList
          localSavedFiles={localSavedFiles}
          savedFilesHandler={{ localSavedFiles, setLocalSavedFiles }}
        />
      </div>
      <main css={page_container}>{children}</main>
    </div>
  );
}

export default EditorDoc;
