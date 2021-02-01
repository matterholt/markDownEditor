import React, { useState, useEffect, createContext } from "react";

import {useLocalStorage } from '../hooks/useLocalStorage'
const SavedDocContext = createContext()



function SavedDocProvider({ children }) {
  const [savedDocs, setSavedDocs] = useLocalStorage("savedFiles");

  return (
    <SavedDocContext.Provider value={[savedDocs, setSavedDocs]}>
      {children}
    </SavedDocContext.Provider>
  );
} 

function useSavedDoc() {
    const context = React.useContext(SavedDocContext);
    if (context === undefined) {
        throw new Error("useSavedDoc must be within SavedDocProvider");
    }
    return context
}

export { SavedDocProvider, useSavedDoc };