import MkLayout from "../general/Layout";
import EditorHeader from "../editor/EditorActions";
import MdCompileLine from "./MdCompileLine"

const MkdownOut = ({ mkDwonText }) => {

  return (
    <div className="inputContainer">
      {/* <pre dangerouslySetInnerHTML={createMarkup()} /> */}
      {mkDwonText.map((mdUserLine, mdLineNum) => (
        <MdCompileLine
          key={mdLineNum}
          mdUserLine={mdUserLine}
          mdLineNum={mdLineNum}
        />
      ))}
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
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};



export default MkdownOut;