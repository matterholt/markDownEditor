import react, { useState, useEffect, Children } from "react";
let showdown = require("showdown");

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"

import EditorDoc from "../components/editor/EditorDoc";
import DocSheet from "../components/editor/DocSheet"
import MkdownInput from "../components/editor/MkdownInput"
import MkdownOut from "../components/editor/MkdownOut";







const Editor = () => {
  const [mdPreviousLines, updateMdInputList] = useState([]);
   const [mkdownInput, updateMkdownInput] = useState("");

  function convertInput(userInput) {
    let converter = new showdown.Converter(),
    html = converter.makeHtml(userInput);
    updateMkdownInput(html);
  }

  function newLineOfMarkdown(newline) {
    updateMdInputList([...mdPreviousLines, newline]);
  }
  

  React.useEffect(() => console.log(mdPreviousLines));

  const [isPrevOn, setIsPrevOn] = useState(false)

  return (
    <Layout>
      <CurrentDocProvider>
        <EditorDoc previewStatus={{ isPrevOn, setIsPrevOn }}>
          <DocSheet>
            <MkdownInput
              mkdownConvert={convertInput}
              mkdownInput={mkdownInput}
              newLineOfMarkdown={newLineOfMarkdown}
            />
          </DocSheet>
          {isPrevOn ? (
            <DocSheet>
              <MkdownOut mkDwonText={mkdownInput} />
            </DocSheet>
          ) : null}
        </EditorDoc>
      </CurrentDocProvider>
    </Layout>
  );
};
export default Editor;
