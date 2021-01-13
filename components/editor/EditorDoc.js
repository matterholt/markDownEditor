import { useState } from "react";

import EditorActions from "./EditorActions"


import { useCurrentDocState } from "../../context/DocPage-context";


function EditorDoc({ children, setCurrentMarkdownRaw }) {
  const [currentDocTitle, setCurrentDocTitle] = useState("TEST")

  return (
    <div className="doc_container">
      <EditorActions
        setCurrentMarkdownRaw={setCurrentMarkdownRaw}
        docTitleHandler={{ currentDocTitle, setCurrentDocTitle }}
      />

      <div className="page_container">{children}</div>

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
