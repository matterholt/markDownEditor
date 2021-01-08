import react, { useState, useEffect, Children } from "react";

import {CurrentDocProvider,useCurrentDocState} from "../context/DocPage-context"

import Layout from "../components/general/Layout"
import EditorDoc from "../components/editor/EditorDoc";
import VewDocController from "../components/editor/VewDocController";


const Editor = () => {

  return (
    <Layout>
      <CurrentDocProvider>
        <EditorDoc>
          <VewDocController/>
        </EditorDoc>
      </CurrentDocProvider>
    </Layout>
  );
};
export default Editor;
