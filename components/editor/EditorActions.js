import React, { useState, useEffect } from "react";

import { Button } from "../general/Button"
import DocTitle from "./DocTitle"

import { useCurrentDocState } from "../../context/DocPage-context";

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
 
function FileActions({ setCurrentMarkdownRaw  }) {
  function clearAll() {
    setCurrentMarkdownRaw([]);
  }
  return (
    <div>
      <Button title="CLEAR" action={clearAll} />
      <Button title="New" action={() => console.log("new")} />
      <Button title="Save" action={() => console.log("save")} />
    </div>
  );
}



function FontSize() {
  const { docState, UpdateDocState } = useCurrentDocState();

  function updateFontSize(action) {
    const newFontSize = docState.fontSize + action;
    UpdateDocState({ name: "fontSize", value: newFontSize });
  }
  return (
    <div>
      <Button title="+" action={() => updateFontSize(1)} />
      <Button title="-" action={() => updateFontSize(-1)} />
    </div>
  );
}

export default function EditorActions({ setCurrentMarkdownRaw, docTitleHandler }) {
  return (
    <div className="editor__actions">
      <FileActions setCurrentMarkdownRaw={setCurrentMarkdownRaw} />
      <DocTitle docTitleHandler={docTitleHandler} />
      <FontSize />

      <style jsx>{`
        .editor__actions {
          background-color: #4a7677;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
        }
      `}</style>
    </div>
  );
}
