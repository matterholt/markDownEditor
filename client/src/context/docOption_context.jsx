import React, { useState, useEffect, createContext } from 'react'



const DocumentOptionsContext = createContext()



function DocumentOptionProvider({ children }) {
    // Provider component to wrap components that require context

    const [docOption, setDocOptions] = useState({ fontSize: 12, })
    
    function docOptionUpdate(updateItem) {
        const { key, value } = updateItem
        setDocOptions({ ...docOption , [key]:value});
    }
    return (
      <DocumentOptionsContext.Provider value={{ docOption, docOptionUpdate }}>
        {children}
      </DocumentOptionsContext.Provider>
    )
}


function useCurrentDocOptions() {
    // custom hook for the context
    const context = React.useContext(DocumentOptionsContext);
    if (context === undefined) {
        throw new Error(
          "useCurrentDocOption must be within DocumentOptionProvider"
        );
    }
    return context
}


export { DocumentOptionProvider, useCurrentDocOptions };