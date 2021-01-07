import MkLayout from "../general/Layout";
import EditorHeader from "../editor/EditorActions";

const MkdownOut = (props) => {
  function createMarkup() {
    return { __html: props.mkDwonText };
  }
  const mkOutputHeader = {
    color: "rgb(157, 174, 198)",
    backgroundColor: "rgb(27, 29, 36)",
  };

  return (
    <MkLayout>
      <EditorHeader headerStyle={mkOutputHeader} editorTitle="Mark Down out" />
      <pre dangerouslySetInnerHTML={createMarkup()} />
      <style jsx>{`
        pre {
          color: rgb(157, 174, 198);
          margin: 0;
          padding: 20px;
          min-height: inherit;
          background-color: #333745;
        }
      `}</style>
    </MkLayout>
  );
};



export default MkdownOut;