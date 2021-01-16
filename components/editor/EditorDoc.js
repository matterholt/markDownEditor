import { useState } from "react";

import { useCurrentDocState } from "../../context/DocPage-context";

import EditorActions from "./EditorActions"
import SavedFiles from "../docFeatures/SavedFiles"





function EditorDoc({ children, currentMarkdownHandlers }) {
  const { docState } = useCurrentDocState();

  const [currentDocTitle, setCurrentDocTitle] = useState("New Doc");
  const { savedFiles } = docState;

  return (
    <div className="doc_container">
      <EditorActions
        currentMarkdownHandlers={currentMarkdownHandlers}
        docTitleHandlers={{ currentDocTitle, setCurrentDocTitle }}
      />
      <div className="savedDoc">
        <SavedFiles savedFiles={savedFiles} />
      </div>
      <div className="page_container">{children}</div>

      <style jsx>{`
        .savedDoc{
          grid-row: 2;
          grid-column:1;
          list-style: none;
          padding: 15px;
        } 
        
        .page_container {
          display: flex;
          flex-flow: row;
          justify-content: center;
          font-size: 10px;
          margin: 15px;
          grid-row: 2;
          grid-column: 2;
        }
        .doc_container {
          margin: 10px;
          display: grid;
          grid-template-columns: 15% 1fr 15%;
          grid-template-rows: 50px 1fr;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default EditorDoc;
