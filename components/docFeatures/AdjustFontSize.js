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
      <Button name="font Increase" title="+" action={() => updateFontSize(1)} />
      <h4>{docState.fontSize}</h4>
      <Button
        name="font Decrease"
        title="-"
        action={() => updateFontSize(-1)}
      />
    </div>
  );
}
export default AdjustFontSize;