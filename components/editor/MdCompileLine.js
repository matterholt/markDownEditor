export default function MdCompileLine({ mdUserLine }) {

  function createInnerHtml() {
    return {
      __html: mdUserLine,
    };
  }

  return (
    <li className="mdLine__rowList">
      <div
        className="mdLine__string"
        dangerouslySetInnerHTML={createInnerHtml()}
      ></div>
    </li>
  );
}