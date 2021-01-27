import { useEffect } from 'react'

const MkdownInput = ({ newLineOfMkDown, mkInputDomRef }) => {

  function changeState(e) {
    const innerInputText = e.target.innerText;
    if (e.keyCode === 13) {
      // should have a id associated so able to find and update
      newLineOfMkDown(innerInputText);
      mkInputDomRef.current.innerText = "";
      mkInputDomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
  useEffect(() => {
    mkInputDomRef.current.focus()
  },[])

  return (
    <div className="inputContainer">
      <pre
        ref={mkInputDomRef}
        onKeyDown={(e) => changeState(e)}
        contentEditable="true"
      />
      <style jsx>{`
        .inputContainer {
          border-top: 1px solid black;
          font-size: 1em;
        }
        pre {
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