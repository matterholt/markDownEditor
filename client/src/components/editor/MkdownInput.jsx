import React, { useState,useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { useCurrentDocOptions } from "../../context/docOption_context";


const mrkdwnInput = css`
  padding: 5px;
  margin: 0;
  min-height: inherit;
  white-space: pre-wrap;
  background-color: #dae0e7;
  margin-bottom: 50vh;

`;

const MkdownInput = ({ newLineOfMkDown, mkInputDomRef }) => {
  const {
    docOption
  } = useCurrentDocOptions();
  const [inlineContent, setInlineContent] = useState('')
  

  function changeState(e) {
 
    if (e.keyCode === 13) {
      // should have a id associated so able to find and update
      newLineOfMkDown(inlineContent);
      setInlineContent("");
      mkInputDomRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }


  useEffect(() => {
    mkInputDomRef.current.focus();
  }, [mkInputDomRef]);

  return (
    <div
      css={css`
        display: grid;
      `}
    >
      <input
        css={css`
          ${mrkdwnInput}
          font-size: ${docOption.fontSize}px;
        `}
        ref={mkInputDomRef}
        onKeyDown={(e) => changeState(e)}
        contentEditable="true"
        value={inlineContent}
        onChange={(e) => setInlineContent(e.target.value)}
      />
    </div>
  );
};

export default MkdownInput;