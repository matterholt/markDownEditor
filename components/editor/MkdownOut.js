import MdCompileLine from "./MdCompileLine"

const MkdownOut = ({ editLine,mkDwonText }) => {
  return (
    <div className="inputContainer">
      {mkDwonText.map((mdUserLine) => (
        <MdCompileLine
          key={mdUserLine.lineId}
          mdUserLine={mdUserLine}
          editLine={editLine}
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