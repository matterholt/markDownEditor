import React, { useState, useEffect, Children } from "react";

import Layout from "../components/general/Layout"
import EditorDoc from "../components/editor/EditorDoc";
import VewDocController from "../components/editor/VewDocController";


const Editor = () => {
  const [currentMarkdownRaw, setCurrentMarkdownRaw] = useState([]);

  return (
    <Layout>
     
        <EditorDoc
          currentMarkdownHandlers={{
            currentMarkdownRaw,
            setCurrentMarkdownRaw,
          }}
        >
          <VewDocController
            currentMarkdownRaw={currentMarkdownRaw}
            setCurrentMarkdownRaw={setCurrentMarkdownRaw}
          />
        </EditorDoc>
  
    </Layout>
  );
};
export default Editor;
