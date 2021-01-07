import EditorActions from "./EditorActions"
import EditorHeader from "./EditorHeader"


import {useCurrentDocState} from "../../context/DocPage-context";


function EditorDoc({ children }) {
    
  const { docState, UpdateDocState } = useCurrentDocState();
  
  return (
    <div>
      <EditorHeader
        fileName={docState.fileName}
        UpdateDocState={UpdateDocState}
      />

      <EditorActions />
      {children}
      <style jsx>{`
        div {
          margin: 0;
          display: flex;
          flex-flow: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default EditorDoc;
