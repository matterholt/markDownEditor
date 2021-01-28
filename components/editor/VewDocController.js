import { useState} from 'react'
import { convertInput } from "../../utils/convertInput";

import DocSheet from "./DocSheet";
import MkdownInput from "./MkdownInput";
import MkdownOut from "./MkdownOut";

import { useCurrentDocState } from "../../context/DocPage-context";

function VewDocController({
  currentMarkdownRaw,
  setCurrentMarkdownRaw,
  updateSelectInput,
}) {
  const mkInputDomRef = React.useRef();

  function newLineOfMkDown(newRawLine) {
    const nextLineId = currentMarkdownRaw.length + 1;
    // let [content] = newRawLine.split("\n");
    const construct = {
      lineId: nextLineId,
      lineContent: newRawLine,
    };
    setCurrentMarkdownRaw([...currentMarkdownRaw, construct]);
  }
  
  function updateSelectInput(contentLine) {
    let contentUpdate = [...currentMarkdownRaw];
    let listId = contentUpdate
      .map((x) => x.lineId)
      .indexOf(contentLine.lineId);
    contentUpdate.splice(listId, 1, contentLine);
    setCurrentMarkdownRaw(contentUpdate);
  }

    return (
      <DocSheet>
        <MkdownOut
          currentMarkdownRaw={currentMarkdownRaw}
          updateSelectInput={updateSelectInput}
          mkInputDomRef={mkInputDomRef}
        />
        <MkdownInput
          newLineOfMkDown={newLineOfMkDown}
          mkInputDomRef={mkInputDomRef}
        />
      </DocSheet>
    );
}
export default VewDocController;