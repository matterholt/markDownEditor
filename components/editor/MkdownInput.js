import react, { useState, useEffect } from "react";

const MkdownInput = ({ mkdownConvert, newLineOfMarkdown }) => {
  // React Ref allowing to get text from the pre tags // useRef??
  const mkInputDomRef = React.createRef();


  // todo ====> 01-07=21
  // remove sate from the parent and have this component control the state
  // so when the state get's cleared the the component will get unmounted and located to the next line??

  function changeState(e) {
    if (e.keyCode === 13) {
      // append current value
      newLineOfMarkdown(e.target.innerText);
      // clear the dom element to start making the next line
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
          border-bottom: 1px solid black;
        }
        pre {
          padding: 5px;
          margin: 0;
          min-height: inherit;
          white-space: pre-wrap;
        }
        pre:focus {
          background-color: #bfcde0;
        }
      `}</style>
    </div>
  );
};

export default MkdownInput;