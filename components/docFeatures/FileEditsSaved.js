import { useState, useEffect } from "react";
import { useCurrentDocState } from "../../context/DocPage-context";

import {useLocalStorage} from "../../Hooks/useLocalStorage";

const SavedFiles = ({saveFileName, removedSelectedDoc}) => {
  return (
    <li>
      <h4>{saveFileName}</h4>
      <div>
        <button>Edit</button>
        <button onClick={() => removedSelectedDoc(saveFileName)}>Delete</button>
      </div>
    </li>
  );
};


function FileEditsSaved() {
  const [state, setState] = useState();
  const localKey = "savedFiles"
  
  useEffect(() => {
    // need to wait for the components to be mounted to the dom before accessing the window
    const localStorageItems = window.localStorage.getItem("savedFiles");
 
    if (localStorageItems) {
      console.log(localStorageItems);
      // const localSavedItem = JSON.parse(localStorageItems);

      // setState(localSavedItem);
    } 
    setState([
      {
        id: 1,
        fileName: "test_2",
        content: [
          "## Doc Two test",
          "another line for test",
          "test test",
          "last line of test",
        ],
      },
    ]);
  }, []);

  useEffect(() => {
    //  update local state when removed
    const updateFilesForLocal = JSON.stringify(state);
    window.localStorage.setItem(localKey, updateFilesForLocal);
  }, [state]);

  function removedSelectedDoc(deletedFileName) {
    const updateList = state.filter((x) => x.fileName != deletedFileName);
    setState(updateList);
  }


  if (!state) {
    return <h3>No Saved Files</h3>;
  } else {
    return (
      <ul>
        <h4>Saved Files</h4>
        {state.map((file) => {
          return (
            <SavedFiles
              key={file.id}
              removedSelectedDoc={removedSelectedDoc}
              saveFileName={file.fileName}
            />
          );
        })}
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
  };
}

export default FileEditsSaved;