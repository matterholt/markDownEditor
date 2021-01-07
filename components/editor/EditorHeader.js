import { useState} from 'react'
const EditorHeader = ({ fileName, UpdateDocState }) => {
  const [fileNameStatus, setFileNameStatus] = useState("current");

  const [newFileName, setNewFileName] = useState(() => fileName);

  function handleUpdate() {
    UpdateDocState({
      name: 'fileName',
      value: newFileName
    })
  setFileNameStatus("current")
  }



  if (fileNameStatus === "current") {
    return (
      <div>
        <button onClick={() => setFileNameStatus("editable")}>
          <h2>{fileName}</h2>
          <style jsx>{`
            h2 {
              margin: 0;
              padding: 10px 0;
            }
          `}</style>
        </button>
      </div>
    );
  } else if (fileNameStatus === "editable") {
    return (
      <div>
        <input
          name={"fileName"}
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
        />
        <button onClick={handleUpdate}>Save</button>
      </div>
    );
  }
};
export default EditorHeader