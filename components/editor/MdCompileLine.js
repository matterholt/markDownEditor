


export default function MdCompileLine({ editLine,mdUserLine }) {
  function createInnerHtml() {
    return {
      __html: mdUserLine.lineContent,
    };
  }

  return (
    <>
      <div
        onClick={()=>editLine(mdUserLine.lineId)}
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
      <style jsx>{`
        .mdLine__string {
          background-color: red;
        }
      `}</style>
    </>
  );
}