import React, { useState, useEffect, Children } from "react";

import {DocumentOptionProvider, useCurrentDocOptions  } from '../context/docOption_context'

import Layout from "../components/general/Layout"
import EditorDoc from "../components/editor/EditorDoc";
import VewDocController from "../components/editor/VewDocController";




const Editor = () => {
  const [currentMarkdownRaw, setCurrentMarkdownRaw] = useState([]);

  return (
    <Layout>
      <DocumentOptionProvider>
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
     </DocumentOptionProvider>
  
    </Layout>
  );
};
export default Editor;
