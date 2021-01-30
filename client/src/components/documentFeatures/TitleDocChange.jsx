/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React,{ useState } from 'react'
import { Modal } from '../general/Modal'


const Form = css`
  border-radius: 5px;
  background-color: white;
  padding: 15px;
  font-size: 2rem;
  display: flex;
  flex-flow: column;
`;
const Input = css`
  font-size: inherit;
  margin: 15px 0;
  border: none;
  border-bottom: 2px solid #6f7d7d;
`;

function TitleDocChange({
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
      <form css={Form} onSubmit={handleUpdate}>
        <label>New Document Name</label>
        <input css={Input}
          name={"fileName"}
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
}
export default TitleDocChange;