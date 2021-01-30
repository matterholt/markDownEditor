import React, {useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Button } from "../general/Button";
// import { useCurrentDocState } from "../context/DocPage-context";

const fontAdjust__fontSize = css`
              background-color: #cedada;
              align-self: center;
              padding: 8px;
              border-radius: 5px;
              font-size: 0.7rem;
              margin: 0;
          
` 
const fontAdjust_container = css`
display: flex;
justify-content: space-between;
`

function AdjustFontSize() {
  const { fontSize, setFontSize } = useState(12); //one place for context

  function updateFontSize(action) {
    const newFontSize = docState.fontSize + action;
    UpdateDocState({ name: "fontSize", value: newFontSize });
  }

  return (
    <div css={fontAdjust_container}>
      <Button name="font Increase" title="+" action={() => updateFontSize(1)} />
      <h4 css={fontAdjust__fontSize}>{fontSize}</h4>
      <Button
        name="font Decrease"
        title="-"
        action={() => updateFontSize(-1)}
      />
    </div>
  );
}
export default AdjustFontSize;