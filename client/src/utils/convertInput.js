import showdown from "showdown"

function convertInput(userInput) {
    let converter = new showdown.Converter(),
      html = converter.makeHtml(userInput);
    return html
  }
export { convertInput };