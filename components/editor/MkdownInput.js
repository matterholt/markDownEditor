import react, { useState, useEffect } from "react";

const MkdownInput = (props) => {
  const mkInputHeader = {
    color: "rgb(27, 29, 36)",
    backgroundColor: "rgb(157, 174, 198)",
  };

  const [userMdInput, updateUserMdInput] = useState("NO CHANGE");

  // React Ref allowing to get text from the pre tags
  const mkInputDomRef = React.createRef();

  function changeState() {
    let userMkdownText = mkInputDomRef.current.innerText;
    props.mkdownConvert(userMkdownText);
  }

  return (
    <MkLayout>
      <EditorHeader headerStyle={mkInputHeader} editorTitle="Mark Down In" />
      <pre
        ref={mkInputDomRef}
        onKeyUp={changeState}
        contentEditable="true"
      ></pre>

      <style jsx>{`
        pre {
          padding: 20px;
          margin: 0;
          background-color: rgb(135, 139, 153);
          min-height: inherit;
        }
        pre:focus {
          background-color: #bfcde0;
        }
      `}</style>
    </MkLayout>
  );
};

export default MkdownInput;