import {useState} from 'react'

import HtmlConvertContainer from "./HtmlConvertContainer";


const MkdownOut = ({ mkDwonText, updateSelectInput }) => {
  return (
    <div className="inputContainer">
      {mkDwonText.map((mdUserLine) => (
        <HtmlConvertContainer
          key={mdUserLine.lineId}
          mdUserLine={mdUserLine}
          updateSelectInput={updateSelectInput}
        />
      ))}
      <style jsx>{`
        .inputContainer {
          border-bottom: 1px solid white;
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