import {useState} from 'react'
import { convertInput } from "../../utils/convertInput";
import UpdateLineModal from "../docFeatures/UpdateLineModal";

export default function HtmlConvertContainer({ mdUserLine, updateSelectInput }) {
  function createInnerHtml() {
    return {
      __html: convertInput(mdUserLine.lineContent),
    };
  }
  
  const [isEditable, setIsEditable] = useState(false);
  const [editLine, setEditLine] = useState({});

  function editPreviousLine(mdLine) {
    setIsEditable(true);
    setEditLine(mdLine);
  }


  return (
    <>
      {isEditable ? (
        <UpdateLineModal
          content={editLine}
          setIsEditable={setIsEditable}
          updateSelectInput={updateSelectInput}
          setEditLine={setEditLine}
        />
      ) : null}
      <div
        key={mdUserLine.lineId}
        onClick={() => editPreviousLine(mdUserLine)}
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
      <style jsx>{`
        .mdLine__string {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}