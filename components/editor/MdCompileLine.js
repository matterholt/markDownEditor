


export default function MdCompileLine({ mdUserLine }) {
  function createInnerHtml() {
    return {
      __html: mdUserLine.lineContent,
    };
  }

  return (
    <>
      <div
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