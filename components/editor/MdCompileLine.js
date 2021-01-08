export default function MdCompileLine({ mdUserLine }) {

  function createInnerHtml() {
    return {
      __html: mdUserLine,
    };
  }

  return (
      <pre
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></pre>
  );
}