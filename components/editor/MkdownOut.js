import {useState} from 'react'

import HtmlConvertContainer from "./HtmlConvertContainer";


const MkdownOut = ({
  currentMarkdownRaw,
  updateSelectInput,
  mkInputDomRef,
}) => {
  return (
    <div className="inputContainer">
      {currentMarkdownRaw.map((mdUserLine) => (
        <HtmlConvertContainer
          key={mdUserLine.lineId}
          mdUserLine={mdUserLine}
          updateSelectInput={updateSelectInput}
          mkInputDomRef={mkInputDomRef}
        />
      ))}
      <style jsx>{`
        .inputContainer {
          border-bottom: 1px solid white;
          font-size: 1em;
        }
        pre {
          color: rgb(157, 174, 198);
          padding: 5px;
          margin: 0;
          min-height: inherit;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};



export default MkdownOut;