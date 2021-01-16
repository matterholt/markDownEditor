/**
 * Context pertaining to the to state of users Documents.
 * 
 * 
 */
import { useState, createContext } from 'react'

const CurrentDocContext = createContext()


function CurrentDocProvider({ children }) {
  const [docState, setDocState] = useState({
    fontSize: 10,
    savedFiles: [
      { id: 0, fileName: "test", content: "sadfasdfasdf asdf asd" },
      { id: 1, fileName: "test_2", content: "sadfasdfasdf asdf asd asdfasdfas" },
    ],
  });
  
  React.useEffect(() => {
    console.log('total Doc',docState);
  });
  

  // Updates the state fo the docs
  function UpdateDocState(event) {
    if (!event) {
      return new Error('Require a name and value attribute to update the Doc state')
    }
    const {name,value} = event;


    setDocState({ ...docState, [name]: value })
    console.log(docState)
   }
 
    return (
      <CurrentDocContext.Provider value={{ docState, UpdateDocState }}>
        {children}
      </CurrentDocContext.Provider>
    );
}


function useCurrentDocState() {
    const context = React.useContext(CurrentDocContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentDocState must be used within a CurrentDoc Provider"
    );
  }
  return context;
}





// TODO export a function that will updated the doc state

export { CurrentDocProvider, useCurrentDocState };