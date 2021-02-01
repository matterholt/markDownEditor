import React, {useState } from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Button } from "../general/Button";
import { useCurrentDocOptions } from "../../context/docOption_context";

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
  const { docOption, docOptionUpdate } = useCurrentDocOptions();
  const fontSize = docOption.fontSize;

  function updateFontSize(action) {
    const newFontSize = fontSize + action;
    docOptionUpdate({ key: "fontSize", value: newFontSize });
  }

  return (
    <div css={fontAdjust_container}>
      <Button
        name="font Decrease"
        title="-"
        action={() => updateFontSize(-1)}
      />
      <h4 css={fontAdjust__fontSize}>{fontSize.toString()}</h4>
      <Button name="font Increase" title="+" action={() => updateFontSize(1)} />
    </div>
  );
}
export default AdjustFontSize;