import { useCurrentDocState } from "../../../client/src/context/DocPage-context";




function FileEditsSaved({ savedFiles }) {
  const { docState, UpdateDocState } = useCurrentDocState();

  function removedSelectedDoc(deletedFileName) {
    const currentList = docState.savedFiles;
    const updateList = currentList.filter((x) => x.fileName != deletedFileName);
    UpdateDocState({ name: "savedFiles", value: updateList });
  }

  return (
    <ul>
      <h4>Saved Files</h4>
      {savedFiles.map((file) => {
        return (
          <li key={file.id}>
            <h4>{file.fileName}</h4>
            <div>
              <button>Edit</button>
              <button onClick={() => removedSelectedDoc(file.fileName)}>
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default FileEditsSaved;