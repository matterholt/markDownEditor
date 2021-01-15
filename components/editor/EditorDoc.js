import { useState } from "react";

import EditorActions from "./EditorActions"


import { useCurrentDocState } from "../../context/DocPage-context";



function SavedFiles({ savedFiles }) {
  return (
    <div>
      <h4>Saved Files</h4>
      {savedFiles.map((file) => {
        return (
          <li key={file.id }>
            <p>{file.fileName}</p>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        );
      })}
    </div>
  );
}


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

      <div className="page_container">
        <SavedFiles savedFiles={savedFiles} />
        {children}
      </div>

      <style jsx>{`
        .page_container {
          display: flex;
          flex-flow: row;
          justify-content: center;
          font-size: 10px;
          margin: 15px;
        }
        .doc_container {
          margin: 10px;
          display: flex;
          flex-flow: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default EditorDoc;
