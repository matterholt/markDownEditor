import MkLayout from "../general/Layout";
import EditorHeader from "../editor/EditorActions";
import MdCompileLine from "./MdCompileLine"

const MkdownOut = ({ mkDwonText }) => {

  return (
    <div className="inputContainer">
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
          padding: 5px;
          margin: 0;
          min-height: inherit;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};



export default MkdownOut;