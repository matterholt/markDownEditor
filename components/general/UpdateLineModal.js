import {useState}from 'react'
function UpdateLine({ content, setIsEditable, updateSelectInput }) {
  const [updatedLine, setUpdatedLine] = useState(content.lineContent);

  function confirmChange() {
    const lineUpdate = {
      lineId: content.lineId,
      lineContent: updatedLine,
    };
    
    updateSelectInput(lineUpdate);
    setIsEditable(false);
  }


  return (
    <div>
      <button onClick={() => setIsEditable(false)}>Close</button>
      <button onClick={confirmChange}>Update</button>

      <h1>find it ${content.lineId}</h1>
      <textarea
        value={updatedLine}
        onChange={(e) => setUpdatedLine(e.target.value)}
      />
      <style jsx>{`
        div {
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


/*
{
  const isEditable = true;
  isEditable ? <UpdateLine content={mdUserLine} /> : null;
}
 */