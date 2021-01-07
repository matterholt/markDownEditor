import EditorActions from "./EditorActions"
import EditorHeader from "./EditorHeader"


import {useCurrentDocState} from "../../context/DocPage-context";


function EditorDoc({ children, previewStatus }) {
  const { docState, UpdateDocState } = useCurrentDocState();

  return (
    <div className="doc_container">
      <EditorHeader
        fileName={docState.fileName}
        UpdateDocState={UpdateDocState}
      />
      <EditorActions previewStatus={previewStatus}/>
      <div className="page_container">{children}</div>

      <style jsx>{`
        .page_container {
          display: flex;
          flex-flow: row;
          justify-content: center;
        }
        .doc_container {
          margin-top: 10px;
          display: flex;
          flex-flow: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default EditorDoc;