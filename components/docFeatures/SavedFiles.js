import { useCurrentDocState } from "../../context/DocPage-context";



function SavedFiles({ savedFiles }) {
    const { docState, UpdateDocState } = useCurrentDocState();
    

    function removedSelectedDoc(deletedFileName) {
        const currentList = docState.savedFiles
        const updateList = currentList.filter(
          (x) => x.fileName != deletedFileName
        );
        console.log(updateList)
        UpdateDocState({ name: 'savedFiles', value: updateList });
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
              <button onClick={()=>removedSelectedDoc(file.fileName)}>Delete</button>
            </div>
          </li>
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
}

export default SavedFiles;