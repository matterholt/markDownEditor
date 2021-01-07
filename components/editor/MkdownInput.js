import react, { useState, useEffect } from "react";





const MkdownInput = (props) => {
  const [userMdInput, updateUserMdInput] = useState("NO CHANGE");

  // React Ref allowing to get text from the pre tags // useRef??
  const mkInputDomRef = React.createRef();

  function changeState() {
    let userMkdownText = mkInputDomRef.current.innerText;
    props.mkdownConvert(userMkdownText);
  }

  return (
    <div className="inputContainer">
      <pre
        ref={mkInputDomRef}
        onKeyUp={changeState}
        contentEditable="true"
      ></pre>

      <style jsx>{`
        .inputContainer {
          border-bottom: 1px solid black;
        }
        pre {
          padding: 5px;
          margin: 0;
          background-color: #fff;
          min-height: inherit;
        }
        pre:focus {
          background-color: #bfcde0;
        }
      `}</style>
    </div>
  );
};

export default MkdownInput;