import { useEffect } from "react";
import {useLocalStorage} from "../../Hooks/useLocalStorage"
import { getRandomInt } from "../../utils/randomId";

import {Button} from "../general/Button"

function SaveFile({ currentMarkdownRaw, isDisabled, currentDocTitle }) {
//   const [savedFile, setSavedFile] = useLocalStorage()

// useEffect(()=>{console.log(savedFile);})
  function saveFile() {
//     const currentlySavedFiles = savedFile;
   
//     if (currentMarkdownRaw.length === 0) {
//       throw new Error("Document is empty");
//     }
//     const currentWorkingDoc = {
//       id: getRandomInt(),
//       fileName: currentDocTitle,
//       content: currentMarkdownRaw,
//     };

//     // const savingFileCheck = currentlySavedFiles.find(
//     //   (x) => x.fileName === currentDocTitle
//     // );
//       const savedListRemove = currentlySavedFiles.filter(
//         (x) => x.fileName !== currentWorkingDoc.fileName
//       );

//       setSavedFile([...savedFile, currentWorkingDoc]);
    }
  














  return (
    <div>
      <Button isDisabled={isDisabled} title="Save" action={saveFile} />
    </div>
  );
}


export default SaveFile;