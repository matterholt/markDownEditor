import {useState, useEffect } from 'react'

const MkdownInput = ({ newLineOfMkDown, mkInputDomRef }) => {
  const [inlineContent, setInlineContent] = useState('')

  function changeState(e) {
 
    if (e.keyCode === 13) {
      // should have a id associated so able to find and update
      newLineOfMkDown(inlineContent);
      setInlineContent("");
      mkInputDomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }


  useEffect(() => {
    mkInputDomRef.current.focus();
    console.log(inlineContent);
  }, [mkInputDomRef]);

  return (
    <div className="inputContainer">
      <input
        ref={mkInputDomRef}
        onKeyDown={(e) => changeState(e)}
        contentEditable="true"
        value={inlineContent}
        onChange={(e) => setInlineContent(e.target.value)}
      />
      <style jsx>{`
        .inputContainer {
          display: grid;
          font-size: 1em;
        }
        input {
          padding: 5px;
          margin: 0;
          min-height: inherit;
          white-space: pre-wrap;
          background-color: #dae0e7;
          margin-bottom: 50vh;
        }
        pre:focus {
          background-color: #bfcde0;
        }
      `}</style>
    </div>
  );
};

export default MkdownInput;