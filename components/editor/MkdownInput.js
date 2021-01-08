import react, { useState, useEffect } from "react";

const MkdownInput = ({ mkdownConvert, newLineOfMarkdown, updateRawData }) => {
  // React Ref allowing to get text from the pre tags // useRef??
  const mkInputDomRef = React.createRef();

  function changeState(e) {
    const innerInputText = e.target.innerText;
    if (e.keyCode === 13) {
      // should have a id associated so able to find and update
      newLineOfMarkdown(innerInputText);

      updateRawData(innerInputText);
      
      mkInputDomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      mkInputDomRef.current.innerText = "";
    }
    let userMkdownText = mkInputDomRef.current.innerText;
    mkdownConvert(userMkdownText);
  }

  return (
    <div className="inputContainer">
      <pre
        ref={mkInputDomRef}
        onKeyUp={(e) => changeState(e)}
        contentEditable="true"
      />
      <style jsx>{`
        .inputContainer {
          border-top: 1px solid black;
        }
        pre {
          padding: 5px;
          margin: 0;
          min-height: inherit;
          white-space: pre-wrap;
          background-color: #dae0e7;
          margin-bottom: 150vh;
        }
        pre:focus {
          background-color: #bfcde0;
        }
      `}</style>
    </div>
  );
};

export default MkdownInput;