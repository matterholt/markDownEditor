import React ,{useState }from 'react'

import {useLocalStorage } from "../../hooks/useLocalStorage"

import { getRandomInt } from "../../utils/randomId";

import { Button } from "../general/Button"



function SaveCurrentFile({savedFilesHandler, currentMarkdownRaw, isDisabled, currentDocTitle }) {
    const {localSavedFiles, setLocalSavedFiles} = savedFilesHandler;



  function saveFile() {
    // use Reducer to remove logic???
    const currentlySavedFiles = localSavedFiles;
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

    // able to just delete the file
    const savedListRemove = currentlySavedFiles.filter(
      (x) => x.fileName !== currentDoc.fileName
    ); 

    // make simpler idea
    // const updateList = savedListRemove ? localSavedFiles


    if (savingFileCheck) {
      setLocalSavedFiles([...savedListRemove, currentDoc]);
    } else {
      setLocalSavedFiles([...localSavedFiles, currentDoc]);
    }
  }

  React.useEffect(() => console.log(localSavedFiles));

  return (
    <div>
      <Button isDisabled={isDisabled} title="Save" action={saveFile} />
    </div>
  );
}


export default SaveCurrentFile;