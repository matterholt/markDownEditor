import React, { useState, useEffect } from "react";

import { Button } from "../general/Button"
import DocTitle from "./DocTitle"

import { useCurrentDocState } from "../../context/DocPage-context";
/*
// removed component, may use later
function DocLayoutViewSelector() {
  const { docState, UpdateDocState } = useCurrentDocState();
  const [docLayoutSelect, setDocLayoutSelect] = useState(
    () => docState.viewSelector
  );

  function handleChange(e) {
    setDocLayoutSelect(e.target.value);
    UpdateDocState({
      name: e.target.name,
      value: e.target.value
    });
  }

  return (
    <div className="viewSelector_container">
      <input
        type="radio"
        id="view_side"
        name="viewSelector"
        value="sideBySide"
        defaultChecked={docLayoutSelect === "sideBySide"}
        onChange={handleChange}
      />
      <label
        className={docLayoutSelect === "sideBySide" ? "selectedItem" : null}
        htmlFor="view_side"
      >
        Side View
      </label>
      <input
        type="radio"
        id="view_top"
        name="viewSelector"
        value="singleSheet"
        defaultChecked={docLayoutSelect === "singleSheet"}
        onChange={handleChange}
      />
      <label
        className={docLayoutSelect === "singleSheet" ? "selectedItem" : null}
        htmlFor="view_top"
      >
        Single
      </label>
      <style jsx>{`
        label {
          width: 100px;
          padding: 5px;
          text-align: center;
        }
        .selectedItem {
          background-color: gray;
          color: light-gray;
        }
        input {
          opacity: 0;
          width: 0;
          height: 0;
          display: none;
        }

        .viewSelector_container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
*/
 
function DocSave({ saveFile, isDisabled }) {
  return (
    <div>
      <Button isDisabled={isDisabled} title="Save" action={saveFile} />
    </div>
  );
}

function ClearCurrentDoc({ setCurrentMarkdownRaw, isDisabled }) {
  function clearAll() {
    setCurrentMarkdownRaw([]);
  }
  return (
    <div>
      <Button isDisabled={isDisabled} title="CLEAR" action={clearAll} />
    </div>
  );
}

function FontSize({ updateFontSize }) {
  return (
    <div>
      <Button title="+" action={() => updateFontSize(1)} />
      <Button title="-" action={() => updateFontSize(-1)} />
    </div>
  );
}



export default function EditorActions({ currentMarkdownHandlers, docTitleHandlers }) {
  const { docState, UpdateDocState } = useCurrentDocState(); //one place for context
  const { currentMarkdownRaw, setCurrentMarkdownRaw } = currentMarkdownHandlers;

  const isDisabled = currentMarkdownRaw.length === 0;


  function updateFontSize(action) {
    const newFontSize = docState.fontSize + action;
    UpdateDocState({ name: "fontSize", value: newFontSize });
  }
  function saveFile() {

    if (currentMarkdownRaw.length === 0) {
      throw new Error('Document is empty')
    }
    const savedFiles = docState.savedFiles;

    // Need to generate a random id, 
    // get id then the max??
    const currentDoc = {
      id: savedFiles.length,
      fileName: docTitleHandlers.currentDocTitle,
      content: currentMarkdownRaw,
    };
    UpdateDocState({ name: "savedFiles", value: [...savedFiles, currentDoc] });
  }

  return (
    <div className="editor__toolbar">
      <div className="editor__actions">
        <ClearCurrentDoc
          setCurrentMarkdownRaw={setCurrentMarkdownRaw}
          isDisabled={isDisabled}
        />
        <DocSave saveFile={saveFile} isDisabled={isDisabled} />
      </div>
      <DocTitle docTitleHandlers={docTitleHandlers} />
      <FontSize updateFontSize={updateFontSize} />

      <style jsx>{`
        .editor__toolbar {
          background-color: #4a7677;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
          grid-column 1 /span2
        }
        .editor__actions {
          display: flex;
        }
      `}</style>
    </div>
  );
}
