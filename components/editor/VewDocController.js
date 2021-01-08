import { useState} from 'react'
import { convertInput } from "../../logic/convertInput";

import DocSheet from "./DocSheet";
import MkdownInput from "./MkdownInput";
import MkdownOut from "./MkdownOut";

import { useCurrentDocState } from "../../context/DocPage-context";




function VewDocController({ htmlHandler, mkdHandler }) {
  const { docState } = useCurrentDocState();
  const viewSelector = docState.viewSelector;

  const { currentDocHTML, updateCurrentDocHTML } = htmlHandler
  const { currentMarkdownRaw, setCurrentMarkdownRaw } = mkdHandler;

  function newLineOfMkDown(newRawLine) {
    //updateRawData
    setCurrentMarkdownRaw([...currentMarkdownRaw, newRawLine]);
  }

  function newLineOfHTMl(newline) {
    //newLineOfMarkdown
    const mdConvert = convertInput(newline);
    updateCurrentDocHTML([...currentDocHTML, mdConvert]);
  }

  // controls how docs are organized, one page, or 2 page with instant conversion to html
  if (viewSelector === "singleSheet") {
    return (
      <DocSheet>
        <MkdownOut mkDwonText={currentDocHTML} />
        <MkdownInput
          newLineOfMkDown={newLineOfMkDown}
          newLineOfHTMl={newLineOfHTMl}
        />
      </DocSheet>
    );
  } else if (viewSelector === "sideBySide") {
    return (
      <>
        <DocSheet>
          {currentMarkdownRaw.map((x) => (
            <pre>{x}</pre>
          ))}
          <MkdownInput
            newLineOfMkDown={newLineOfMkDown}
            newLineOfHTMl={newLineOfHTMl}
          />
        </DocSheet>
        <DocSheet>
          <MkdownOut mkDwonText={currentDocHTML} />
        </DocSheet>
      </>
    );
  } else {
    return <p>noting</p>;
  }
}
export default VewDocController;