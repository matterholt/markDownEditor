import { useState} from 'react'

import DocSheet from "./DocSheet";
import MkdownInput from "./MkdownInput";
import MkdownOut from "./MkdownOut";

import { useCurrentDocState } from "../../context/DocPage-context";

import {convertInput}from "../../logic/convertInput"

function VewDocController() {
  const { docState } = useCurrentDocState();
  let viewSelector = docState.viewSelector;

  const [mdPreviousLines, updateMdInputList] = useState([]);
  const [markdownRaw, setMarkDownRaw] = useState([]);


  function updateRawData(newRawLine) {
    setMarkDownRaw([...markdownRaw,newRawLine]);
  }


  function newLineOfMarkdown(newline) {
    const mdConvert = convertInput(newline);
    updateMdInputList([...mdPreviousLines, mdConvert]);
  }

  function ClearScreen() {
    updateMdInputList()
  }

  // controls how docs are organized, one page, or 2 page with instant conversion to html
  if (viewSelector === "singleSheet") {
    return (
      <DocSheet>
        <MkdownOut mkDwonText={mdPreviousLines} />
        <MkdownInput
          mkdownConvert={convertInput}
          updateRawData={updateRawData}
          newLineOfMarkdown={newLineOfMarkdown}
        />
      </DocSheet>
    );
  } else if (viewSelector === "sideBySide") {
    return (
      <>
        <DocSheet>
          {markdownRaw.map((x) => (
            <pre>{x}</pre>
          ))}
          <MkdownInput
            mkdownConvert={convertInput}
            newLineOfMarkdown={newLineOfMarkdown}
            updateRawData={updateRawData}
          />
        </DocSheet>
        <DocSheet>
          <MkdownOut mkDwonText={mdPreviousLines} />
        </DocSheet>
      </>
    );
  } else {
    return <p>noting</p>;
  }
}
export default VewDocController;