import {useState} from 'react'
import { convertInput } from "../../utils/convertInput";

export default function HtmlConvertContainer({ mdUserLine, editPreviousLine }) {
  function createInnerHtml() {
    return {
      __html: convertInput(mdUserLine.lineContent),
    };
  }

  return (
    <>
      <div
        key={mdUserLine.lineId}
        onClick={() => editPreviousLine(mdUserLine)}
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
      <style jsx>{`
        .mdLine__string {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}