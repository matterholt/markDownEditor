import { useState} from 'react'
import { convertInput } from "../../logic/convertInput";

import DocSheet from "./DocSheet";
import MkdownInput from "./MkdownInput";
import MkdownOut from "./MkdownOut";

import { useCurrentDocState } from "../../context/DocPage-context";

function VewDocController({ htmlHandler, mkdHandler }) {

  const { docState } = useCurrentDocState();
  const viewSelector = docState.viewSelector;

  const [isEditable,setIsEditable] = useState(false);


  const { currentDocHTML, updateCurrentDocHTML } = htmlHandler
  const { currentMarkdownRaw, setCurrentMarkdownRaw } = mkdHandler;

  const [lineEdit, setLineEdit] = useState({lineId:"0", lineContent:"asdfasdfasdf"})

  function newLineOfMkDown(newRawLine) {
    //updateRawData
    const nextLineId = currentMarkdownRaw.length + 1
    let [content] = newRawLine.split('\n');
    const construct = {
      lineId: nextLineId,
      lineContent: content,
    };
    console.log(construct);
    setCurrentMarkdownRaw([...currentMarkdownRaw, construct]);
  }

  function newLineOfHTMl(newline) {
    //newLineOfMarkdown
    const mdConvert = convertInput(newline);
        const nextLineId = currentDocHTML.length + 1;
        const construct = {
          lineId: nextLineId,
          lineContent: mdConvert,
        };
    
    updateCurrentDocHTML([...currentDocHTML, construct]);
  } 

  function editLine(elemID) {
setIsEditable(true)
    const editLine = currentMarkdownRaw.find((x) => {
      return x.lineId === 2;
    });

    setLineEdit(editLine)
  }

  // controls how docs are organized, one page, or 2 page with instant conversion to html
  if (viewSelector === "singleSheet") {
    return (
      <DocSheet lineEdit={lineEdit}>
        <MkdownOut mkDwonText={currentDocHTML} />
        <MkdownInput
          newLineOfMkDown={newLineOfMkDown}
          newLineOfHTMl={newLineOfHTMl}
        />
      </DocSheet>
    );
  } else if (viewSelector === "sideBySide") {
    return (
      <>
        <DocSheet
          isEditable={isEditable}
          lineEdit={lineEdit}
          setIsEditable={setIsEditable}
        >
          {currentMarkdownRaw.map((x) => (
            <pre
              style={{
                backgroundColor: "blue",
              }}
              onClick={() => editLine(x.lineId)}
              key={x.lineId}
            >
              {x.lineContent}
            </pre>
          ))}
          <MkdownInput
            newLineOfMkDown={newLineOfMkDown}
            newLineOfHTMl={newLineOfHTMl}
          />
        </DocSheet>
        <DocSheet>
          <MkdownOut mkDwonText={currentDocHTML} />
        </DocSheet>
      </>
    );
  } else {
    return <p>Nothing</p>;
  }
}
export default VewDocController;