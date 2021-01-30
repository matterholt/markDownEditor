import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { convertInput } from "../../utils/convertInput";


const editable = css`
  cursor: pointer;
  background-color:  none;
`;
const nonEditable = css`
  cursor:  auto;
  background-color: #d6d6d6;
`;

export default function HtmlConvertContainer({
  mdUserLine,
  updateSelectInput,
  mkInputDomRef,
}) {
  const [isEditable, setIsEditable] = useState(false);
  const [editLine, setEditLine] = useState(mdUserLine.lineContent);

   function createInnerHtml() {
     return {
       __html: convertInput(editLine),
     };
   }
  
  function updateOnBlur(e) {
    // once clicked on another dom elem will not remove edit style
    if (!e.currentTarget.contains(e.relatedTarget)) {
    setIsEditable(false);
      const internalText = e.target.innerText;
      setEditLine(internalText);
    }
  }

  function handleKey(e) {
    const key = e.keyCode
    if (key === 13) {
      setIsEditable(false);
      handleDocUpdate();
      mkInputDomRef.current.focus();
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
  
  return (
    <div>
      <div
        contentEditable="true"
        key={mdUserLine.lineId}
        onFocus={() => setIsEditable(true)}
        onBlur={updateOnBlur}
        onKeyUp={(e) => handleKey(e)}
        style={isEditable ? editable : nonEditable} // need to chec kup
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
    </div>
  );
}