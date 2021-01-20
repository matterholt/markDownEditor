import { Button } from "../general/Button";
import { useCurrentDocState } from "../../context/DocPage-context";


function AdjustFontSize() {
  const { docState, UpdateDocState } = useCurrentDocState(); //one place for context

  function updateFontSize(action) {

    const newFontSize = docState.fontSize + action;
    UpdateDocState({ name: "fontSize", value: newFontSize });
  }

  return (
    <div className="fontAdjust_container">
      <Button name="font Increase" title="+" action={() => updateFontSize(1)} />
      <h4 className="fontAdjust__fontSize">{docState.fontSize}</h4>
      <Button
        name="font Decrease"
        title="-"
        action={() => updateFontSize(-1)}
      />
      <style jsx>{`
        .fontAdjust__fontSize {
          background-color: #cedada;
          align-self: center;
          padding: 8px;
          border-radius: 5px;
          font-size: 0.7rem;
          margin:0; 
        }

        .fontAdjust_container {
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
export default AdjustFontSize;