import {useState} from 'react'

import HtmlConvertContainer from "./HtmlConvertContainer";
import UpdateLineModal from "../docFeatures/UpdateLineModal";

const MkdownOut = ({ currentMarkdownRaw, updateSelectInput }) => {

    const [isEditable, setIsEditable] = useState(false);
    const [editLine, setEditLine] = useState({});

    function editPreviousLine(mdLine) {
      setIsEditable(true);
      setEditLine(mdLine);
    }

  return (
    <div className="inputContainer">
      {isEditable ? (
        <UpdateLineModal
          content={editLine}
          setIsEditable={setIsEditable}
          updateSelectInput={updateSelectInput}
          setEditLine={setEditLine}
        />
      ) : null}
      {currentMarkdownRaw.map((mdUserLine) => (
        <HtmlConvertContainer
          key={mdUserLine.lineId}
          editPreviousLine={editPreviousLine}
          mdUserLine={mdUserLine}
        />
      ))}
      <style jsx>{`
        .inputContainer {
          border-bottom: 1px solid white;
          font-size: 1em;
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