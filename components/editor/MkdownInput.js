
const MkdownInput = ({newLineOfMkDown, newLineOfHTMl }) => {
  const mkInputDomRef = React.createRef();

  function changeState(e) {
    const innerInputText = e.target.innerText;
    if (e.keyCode === 13) {
      // should have a id associated so able to find and update
      newLineOfHTMl(innerInputText);
      newLineOfMkDown(innerInputText);

      mkInputDomRef.current.innerText = "";
      mkInputDomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
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