import react, { useState, useEffect, Children } from "react";

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"
import EditorDoc from "../components/editor/EditorDoc";
import VewDocController from "../components/editor/VewDocController";


const Editor = () => {
    const [currentMarkdownRaw, setCurrentMarkdownRaw] = useState([]);
  




  React.useEffect(() => {
    console.log(currentMarkdownRaw);
  }, []);

  
  return (
    <Layout>
      <CurrentDocProvider>
        <EditorDoc setCurrentMarkdownRaw={setCurrentMarkdownRaw}>
          <VewDocController
            currentMarkdownRaw={currentMarkdownRaw}
            setCurrentMarkdownRaw={setCurrentMarkdownRaw}
          />
        </EditorDoc>
      </CurrentDocProvider>
    </Layout>
  );
};
export default Editor;
