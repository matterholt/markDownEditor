import React, { useState, useEffect } from "react";


import { useCurrentDocState } from "../../context/DocPage-context";

function DocLayoutViewSelector() {
  const { docState, UpdateDocState } = useCurrentDocState();
  const [docLayoutSelect, setDocLayoutSelect] = useState(
    () => docState.vewSelector
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
        name="vewSelector"
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
        name="vewSelector"
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



export default function EditorActions() {
      
  return (
    <div className="editor__actions">
      <DocLayoutViewSelector/>
      <button onClick={() => console.log("new")}> New </button>
      <button onClick={() => console.log("save")}> Save </button>

      <style jsx>{`
        .editor__actions {
          background-color: #f3f8f8;
          display: flex;
          justify-content: end;
          margin-bottom: 25px;
        }
      `}</style>
    </div>
  );
}
