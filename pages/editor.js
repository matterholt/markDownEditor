import react, { useState, useEffect, Children } from "react";
let showdown = require("showdown");

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"

import EditorDoc from "../components/editor/EditorDoc";
import MkdownInput from "../components/editor/MkdownInput"
import MkdownOut from "../components/editor/MkdownOut";





const DocSheet = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        background-color: #eaeaea;
        max-width: 75vw;
        min-width:50%;
        min-height: 100vh;
        padding: 5px;
        margin: 2px;
        border-radius: 10px;
      }
    `}</style>
  </div>
);

const Editor = () => {

  const [mkdownInput, updateMkdownInput] = useState("");
  function convertInput(userInput) {
    let converter = new showdown.Converter(),
      html = converter.makeHtml(userInput);
    updateMkdownInput(html);
  }

  const [isPrevOn, setIsPrevOn] = useState(false)

  return (
    <Layout>
      <CurrentDocProvider>

        <EditorDoc previewStatus={{ isPrevOn, setIsPrevOn }}>
          <DocSheet>
            <MkdownInput mkdownConvert={convertInput} />
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
