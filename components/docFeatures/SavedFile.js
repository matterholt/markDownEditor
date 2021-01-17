function DocSave({ saveFile, isDisabled }) {

  function saveFile() {
    const currentlySavedFiles = docState.savedFiles;
          if (currentMarkdownRaw.length === 0) {
            throw new Error("Document is empty");
          }
    
    const savingFileCheck = currentlySavedFiles.find((x) => x.fileName === docTitleHandlers.currentDocTitle)

    // need a better way to calculate the id
    const currentDoc = {
      id: getRandomInt(),
      fileName: docTitleHandlers.currentDocTitle,
      content: currentMarkdownRaw,
    };
    
    const savedListRemove = currentlySavedFiles.filter(
      (x) => x.fileName !== currentDoc.fileName);
    
    if (savingFileCheck) {
      let updatedSaveFiles = [...savedListRemove, currentDoc];
            UpdateDocState({
              name: "savedFiles",
              value: updatedSaveFiles
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


export default DocSave