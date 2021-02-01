import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import DocTitle from "../documentFeatures/DocTitle"
import AdjustFontSize from "../documentFeatures/AdjustFontSize";
import ClearCurrentDoc from "../documentFeatures/ClearCurrentDoc"
import SaveFile from "../documentFeatures/SaveFile"


const editor__toolbar = css`
          background-color: #4a7677;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
          grid-column: 1 /span2;

`;

const editor__actions = css`
  display: flex;
`;

export default function EditorActions({ currentMarkdownHandlers, docTitleHandlers }) {
  const { currentMarkdownRaw, setCurrentMarkdownRaw } = currentMarkdownHandlers;
  const isDisabled = currentMarkdownRaw.length === 0;


  return (
    <div css={editor__toolbar}>
      <div css={editor__actions}>
        <ClearCurrentDoc
          setCurrentMarkdownRaw={setCurrentMarkdownRaw}
          isDisabled={isDisabled}
        />
        <SaveFile
          currentMarkdownRaw={currentMarkdownRaw}
          isDisabled={isDisabled}
          currentDocTitle={docTitleHandlers.currentDocTitle}
        />
      </div>
      <DocTitle docTitleHandlers={docTitleHandlers} />
      <AdjustFontSize />
    </div>
  );
}
