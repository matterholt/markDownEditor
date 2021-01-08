import react, { useState, useEffect, Children } from "react";

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"
import EditorDoc from "../components/editor/EditorDoc";
import VewDocController from "../components/editor/VewDocController";


const Editor = () => {
    const [currentMarkdownRaw, setCurrentMarkdownRaw] = useState([]);
    const [currentDocHTML, updateCurrentDocHTML] = useState([]);
  
  function clearAll() {
    setCurrentMarkdownRaw([])
    updateCurrentDocHTML([])
  }

  
  return (
    <Layout>
      <CurrentDocProvider>
        <EditorDoc clearAll={clearAll}>
          <VewDocController
            htmlHandler={{ currentDocHTML, updateCurrentDocHTML }}
            mkdHandler={{ currentMarkdownRaw, setCurrentMarkdownRaw }}
          />
        </EditorDoc>
      </CurrentDocProvider>
    </Layout>
  );
};
export default Editor;
