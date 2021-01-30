import React from "react";

import { Button } from "../general/Button";

function ClearCurrentDoc({ setCurrentMarkdownRaw, isDisabled }) {
  function clearAll() {
    setCurrentMarkdownRaw([]);
  }
  return (
    <div>
      <Button isDisabled={isDisabled} title="CLEAR" action={clearAll} />
    </div>
  );
}

export default ClearCurrentDoc;