import react, { useState, useEffect } from "react";
let showdown = require("showdown");

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"

import EditorDoc from "../components/editor/EditorDoc";
import MkdownInput from "../components/editor/MkdownInput"
import MkdownOut from "../components/editor/MkdownOut";







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
        <EditorDoc>
          <MkdownInput mkdownConvert={convertInput} />
          {isPrevOn ? (
            <div>
              <button>Preview</button>
              <MkdownOut mkDwonText={mkdownInput} />
            </div>
          ) : null}
        </EditorDoc>
      </CurrentDocProvider>
    </Layout>
  );
};
export default Editor;
