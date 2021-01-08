import React, { useState, useEffect } from "react";
export default function EditorActions({ previewStatus }) {
  const { isPrevOn, setIsPrevOn } = previewStatus;
  return (
    <div className="editor__actions">
      <button onClick={() => setIsPrevOn(!isPrevOn)}>
        {isPrevOn ? 'Two' : "Single"} Markdown
      </button>
      <button onClick={() => console.log("new")}> New </button>
      <button onClick={() => console.log("save")}> Save </button>

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
