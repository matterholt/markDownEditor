import { useState } from "react";

import { useCurrentDocState } from "../../context/DocPage-context";

import EditorActions from "./EditorActions"
import FileEditsSaved from "../docFeatures/FileEditsSaved";


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
      <aside className="savedDoc">
        <FileEditsSaved savedFiles={savedFiles} />
      </aside>
      <main className="page_container">{children}</main>

      <style jsx>{`
        .savedDoc {
          grid-row: 2;
          grid-column: 1;
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
