import React, { useState, useEffect } from "react";
export default function EditorActions(props) {
  return (
    <div className="editor__actions">
      <button onClick={props.clearList}> Preview </button>
      <button onClick={props.clearList}> New </button>
      <button onClick={props.clearList}> Save </button>

      <style jsx>{`
        .editor__actions {
          background-color: #f3f8f8;
          display: flex;
          justify-content: end;
          background-color: gray;
          margin-bottom: 25px;
        }
      `}</style>
    </div>
  );
}
