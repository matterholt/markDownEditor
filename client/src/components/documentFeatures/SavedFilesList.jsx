import React, { useEffect, useState} from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import {useLocalStorage } from "../../hooks/useLocalStorage"

const SavedFiles = ({ saveFileName, removedSelectedDoc }) => {
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



function SavedFilesList({ savedFilesHandler }) {
    const { localSavedFiles, setLocalSavedFiles } = savedFilesHandler;

  function removedSelectedDoc(deletedFileName) {
    const updateList = localSavedFiles.filter(
      (x) => x.fileName != deletedFileName
    );
    setLocalSavedFiles(updateList);
  }

  if (localSavedFiles.length === 0) {
    return <h3>No Saved Files</h3>;
  } else {
    return (
      <ul
        css={css`
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
        `}
      >
        <h4>Saved Files</h4>
        {localSavedFiles.map((file) => {
          return (
            <SavedFiles
              key={file.id}
              removedSelectedDoc={removedSelectedDoc}
              saveFileName={file.fileName}
            />
          );
        })}
      </ul>
    );
  }
}

export default SavedFilesList;