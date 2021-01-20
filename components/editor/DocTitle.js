import { useState } from 'react'
import TitleDocChange from "../docFeatures/TitleDocChange"



const DocTitle = ({ docTitleHandlers }) => {
  const { currentDocTitle, setCurrentDocTitle } = docTitleHandlers;
  const [fileNameStatus, setFileNameStatus] = useState("current");
  return (
    <div>
      <TitleDocChange
        status={fileNameStatus}
        currentDocTitle={currentDocTitle}
        setCurrentDocTitle={setCurrentDocTitle}
        setFileNameStatus={setFileNameStatus}
      />
      <button onClick={() => setFileNameStatus("updateTitle")}>
        <h2>{currentDocTitle || "NEW DOC..."}</h2>
      </button>
      <style jsx>{`
        h2 {
          margin: 0;
          padding: 10px 0;
          font-weight: 900;
          color: #fff;
        }
        button {
          border: none;
          background: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 2rem;
          width: max-content;
        }
      `}</style>
    </div>
  );
};
export default DocTitle;