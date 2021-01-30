import React ,{useState }from 'react'
import { getRandomInt } from "../../utils/randomId";

import {Button} from "../general/Button"

function SaveFile({ currentMarkdownRaw, isDisabled, currentDocTitle }) {
  const { docState, UpdateDocState } = useState(); //one place for context

  function saveFile() {
    const currentlySavedFiles = docState.savedFiles;
    if (currentMarkdownRaw.length === 0) {
      throw new Error("Document is empty");
    }

    const savingFileCheck = currentlySavedFiles.find(
      (x) => x.fileName === currentDocTitle
    );

    // need a better way to calculate the id
    const currentDoc = {
      id: getRandomInt(),
      fileName: currentDocTitle,
      content: currentMarkdownRaw,
    };

    const savedListRemove = currentlySavedFiles.filter(
      (x) => x.fileName !== currentDoc.fileName
    );

    if (savingFileCheck) {
      let updatedSaveFiles = [...savedListRemove, currentDoc];
      UpdateDocState({
        name: "savedFiles",
        value: updatedSaveFiles,
      });
    } else {
      UpdateDocState({
        name: "savedFiles",
        value: [...currentlySavedFiles, currentDoc],
      });
    }
  }

  return (
    <div>
      <Button isDisabled={isDisabled} title="Save" action={saveFile} />
    </div>
  );
}


export default SaveFile;