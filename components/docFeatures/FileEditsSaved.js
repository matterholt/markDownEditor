import { useState } from "react";
import { useCurrentDocState } from "../../context/DocPage-context";

import useLocalStorage from "../../Hooks/useLocalStorage";

const SavedFiles = (file) => (
  <li key={file.id}>
    <h4>{file.fileName}</h4>
    <div>
      <button>Edit</button>
      <button onClick={() => removedSelectedDoc(file.fileName)}>Delete</button>
    </div>
  </li>
);


function FileEditsSaved() {

  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
         const storedItem = window.localStorage.getItem("docState");
         if (storedItem) {
           return JSON.parse(storedItem);
         } else {
           return [];
         }
    }


  });

  React.useEffect(() => { console.log("list save files", state);})

  function removedSelectedDoc(deletedFileName) {
    const currentList = docState.savedFiles;
    const updateList = currentList.filter((x) => x.fileName != deletedFileName);
    UpdateDocState({ name: "savedFiles", value: updateList });
  }

  return (
    <ul>
      <h4>Saved Files</h4>
      {JSON.stringify(state.savedFiles)}
      {/* {savedFiles.map((file) => {
        return (
          <SavedFiles file={file}/>
        );
      })} */}
      <style jsx>{`
        h4 {
          font-size: 1.2rem;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </ul>
  );
}

export default FileEditsSaved;