import {useState}from 'react'
function UpdateLine({
  content,
  setIsEditable,
  updateSelectInput,
  setEditLine,
}) {
  const [updatedLine, setUpdatedLine] = useState(() => content.lineContent);

  function confirmChange() {
    const lineUpdate = {
      lineId: content.lineId,
      lineContent: updatedLine,
    };
    setEditLine()
    updateSelectInput(lineUpdate);
    setIsEditable(false);
  }

  return (
    <div>
      <textarea
        value={updatedLine}
        onChange={(e) => setUpdatedLine(e.target.value)}
      />
      <button onClick={() => setIsEditable(false)}>Close</button>
      <button onClick={confirmChange}>Update</button>
      <style jsx>{`
        div {
          op: 0;
          left: 0;
          display: flex;
          position: relative;
          z-index: 100;
          background-color: gray;
          border: 1px solid black;
          color: white;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
export default UpdateLine;
