import React, { useState, useEffect } from "react";

import DocTitle from "./DocTitle"
import AdjustFontSize from "../docFeatures/AdjustFontSize";
import ClearCurrentDoc from "../docFeatures/ClearCurrentDoc"
import SaveFile from "../docFeatures/SaveFile"


export default function EditorActions({ currentMarkdownHandlers, docTitleHandlers }) {
  const { currentMarkdownRaw, setCurrentMarkdownRaw } = currentMarkdownHandlers;
  const isDisabled = currentMarkdownRaw.length === 0;


  return (
    <div className="editor__toolbar">
      <div className="editor__actions">
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
      <style jsx>{`
        .editor__toolbar {
          background-color: #4a7677;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
          grid-column 1 /span2
        }
        .editor__actions {
          display: flex;
        }
      `}</style>
    </div>
  );
}
