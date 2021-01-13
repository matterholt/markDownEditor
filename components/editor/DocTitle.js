import { useState } from 'react'

import {Modal} from "../general/Modal"


function TitleUpdate({
  status,
  currentDocTitle,
  setCurrentDocTitle,
  setFileNameStatus,
}) {
  const [newFileName, setNewFileName] = useState(currentDocTitle);

  function handleUpdate() {
    setCurrentDocTitle(newFileName);
    setFileNameStatus("current");
  }

  return (
    <Modal status={status} modalName={"updateTitle"}>
      <form onSubmit={handleUpdate}>
        <label>New Document Name</label>
        <input
          name={"fileName"}
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
      <style jsx>{`
        form {
          border-radius: 5px;
          background-color: white;
          padding: 15px;
          font-size: 2rem;
          display: flex;
          flex-flow: column;
        }
        input {
          font-size: inherit;
          margin: 15px 0;
          border: none;
          border-bottom: 2px solid #6f7d7d;
        }
      `}</style>
    </Modal>
  );
}


const DocTitle = ({ docTitleHandler }) => {
  const { currentDocTitle, setCurrentDocTitle } = docTitleHandler;
  const [fileNameStatus, setFileNameStatus] = useState("current");
    return (
      <div>
        <TitleUpdate
          status={fileNameStatus}
          currentDocTitle={currentDocTitle}
          setCurrentDocTitle={setCurrentDocTitle}
          setFileNameStatus={setFileNameStatus}
        />
        <button onClick={() => setFileNameStatus("updateTitle")}>
          <h2>{currentDocTitle}</h2>
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