import react, { useState, useEffect, Children } from "react";

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"
import EditorDoc from "../components/editor/EditorDoc";
import VewDocController from "../components/editor/VewDocController";


const Editor = () => {
    const [currentMarkdownRaw, setCurrentMarkdownRaw] = useState([]);
  
  function clearAll() {
    setCurrentMarkdownRaw([])
  }

    function updateSelectInput(contentLine) {
      let contentUpdate = [...currentMarkdownRaw];
      let listId = contentUpdate
        .map((x) => x.lineId)
        .indexOf(contentLine.lineId);
      contentUpdate.splice(listId, 1, contentLine);
      setCurrentMarkdownRaw(contentUpdate);
      // how to refresh the page once we have the an updated value????
    }

  React.useEffect(() => {
    console.log(currentMarkdownRaw);
  }, []);

  
  return (
    <Layout>
      <CurrentDocProvider>
        <EditorDoc clearAll={clearAll}>
          <VewDocController
            currentMarkdownRaw={currentMarkdownRaw}
            setCurrentMarkdownRaw={setCurrentMarkdownRaw}
            updateSelectInput={updateSelectInput}
          />
        </EditorDoc>
      </CurrentDocProvider>
    </Layout>
  );
};
export default Editor;
