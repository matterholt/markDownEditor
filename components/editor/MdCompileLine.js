export default function MdCompileLine({ mdUserLine }) {

  function createInnerHtml() {
    return {
      __html: mdUserLine,
    };
  }

  return (
      <div
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
  );
}