import react, { useState, useEffect } from "react";

const MkdownInput = ({ mkdownConvert, newLineOfMarkdown }) => {
  // React Ref allowing to get text from the pre tags // useRef??
  const mkInputDomRef = React.createRef();
  const [markdownRaw, setMarkDownRaw] = useState([])
  

  function changeState(e) {
    const innerInputText = e.target.innerText;
    if (e.keyCode === 13) {
      // should have a id associated so able to find and update
      newLineOfMarkdown(innerInputText);
      setMarkDownRaw([...markdownRaw, innerInputText]);
      mkInputDomRef.current.innerText = ""
    } 

      // keep adding to the current Line id.
 
        let userMkdownText = mkInputDomRef.current.innerText;
    mkdownConvert(userMkdownText);
  
  }

  return (
    <div className="inputContainer">
      {markdownRaw.map((x) => <p>{x}</p>)}
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