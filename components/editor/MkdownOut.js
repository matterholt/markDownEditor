import MkLayout from "../general/Layout";
import EditorHeader from "../editor/EditorActions";

const MkdownOut = (props) => {
  function createMarkup() {
    return { __html: props.mkDwonText };
  }
  const mkOutputHeader = {
    color: "rgb(157, 174, 198)",
    backgroundColor: "rgb(27, 29, 36)",
  };

  return (
    <div className="inputContainer">
      <pre dangerouslySetInnerHTML={createMarkup()} />
      <style jsx>{`
        .inputContainer {
          border-bottom: 1px solid white;
        }
        pre {
          color: rgb(157, 174, 198);
          margin: 0;
          padding: 5px;
          min-height: inherit;
          background-color: #333745;
        }
      `}</style>
    </div>
  );
};



export default MkdownOut;