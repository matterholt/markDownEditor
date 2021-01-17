import { Button } from "../general/Button";
import { useCurrentDocState } from "../../context/DocPage-context";


function AdjustFontSize() {
  const { docState, UpdateDocState } = useCurrentDocState(); //one place for context

  function updateFontSize(action) {
    const newFontSize = docState.fontSize + action;
    UpdateDocState({ name: "fontSize", value: newFontSize });
  }

  return (
    <div>
      <Button title="+" action={() => updateFontSize(1)} />
      <Button title="-" action={() => updateFontSize(-1)} />
    </div>
  );
}
export default AdjustFontSize;