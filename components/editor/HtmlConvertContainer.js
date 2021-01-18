import {useState} from 'react'
import { convertInput } from "../../utils/convertInput";
import UpdateLineModal from "../docFeatures/UpdateLineModal";



export default function HtmlConvertContainer({
  mdUserLine,
  updateSelectInput,
  mkInputDomRef,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [editLine, setEditLine] = useState(mdUserLine.lineContent);

  function updateOnBlur(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      const internalText = e.target.innerText;
      setEditLine(internalText);
    }
  }

  function updateOnEnter(e) {
    if (e.keyCode === 13) {
      handleDocUpdate();
      mkInputDomRef.current.focus()
    }
  }

  function handleDocUpdate() {
    const lineUpdate = {
      lineId: mdUserLine.id,
      lineContent: editLine,
    };
    setIsEditable(false);
    updateSelectInput(lineUpdate);
  }

  function createInnerHtml() {
    return {
      __html: convertInput(editLine),
    };
  }

  return (
    <div>
      <div
        contentEditable="true"
        key={mdUserLine.lineId}
        onBlur={updateOnBlur}
        onKeyUp={(e) => updateOnEnter(e)}
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
      <style jsx>{`
        .mdLine__string {
          cursor: pointer;
          background-color: ${isEditable ? "gray" : "none"};
        }
      `}</style>
    </div>
  );
}