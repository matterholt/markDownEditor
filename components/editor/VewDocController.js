import { useState} from 'react'

import DocSheet from "./DocSheet";
import MkdownInput from "./MkdownInput";
import MkdownOut from "./MkdownOut";

import { useCurrentDocState } from "../../context/DocPage-context";

import {convertInput}from "../../logic/convertInput"

function VewDocController() {
  const { docState } = useCurrentDocState();
  let docLayout = docState.vewSelector;


  const [mdPreviousLines, updateMdInputList] = useState([]);
  const [mkdownInput, updateMkdownInput] = useState("");


  function newLineOfMarkdown(newline) {
    const mdConvert = convertInput(newline);
    updateMdInputList([...mdPreviousLines, mdConvert]);
  }

  // controls how docs are organized, one page, or 2 page with instant conversion to html
  if (docLayout === "singleSheet") {
    return (
      <DocSheet>
        <MkdownOut mkDwonText={mdPreviousLines} />
        <MkdownInput
          mkdownConvert={convertInput}
          mkdownInput={mkdownInput}
          newLineOfMarkdown={newLineOfMarkdown}
        />
      </DocSheet>
    );
  } else if (docLayout === "sideBySide") {
    return (
      <>
      <DocSheet>
        <MkdownInput
          mkdownConvert={convertInput}
          mkdownInput={mkdownInput}
          newLineOfMarkdown={newLineOfMarkdown}
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