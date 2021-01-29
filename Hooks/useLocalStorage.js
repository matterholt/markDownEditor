import {useState,useEffect}from 'react'


export function useLocalStorage() {
  const [state, setState] = useState();
    const localKey = "savedFiles";
    

useEffect(() => console.log(state));

  useEffect(() => {
    // need to wait for the components to be mounted to the dom before accessing the window
    const localStorageItems = window.localStorage.getItem("savedFiles");

    if (localStorageItems) {
   
      const localSavedItem = JSON.parse(localStorageItems);
      setState(localSavedItem);
    }
    setState([
      {
        id: 1,
        fileName: "test_2",
        content: [
          "## Doc Two test",
          "another line for test",
          "test test",
          "last line of test",
        ],
      },
    ]);
  }, []);

  useEffect(() => {
    //  update local state when removed
    const updateFilesForLocal = JSON.stringify(state);
    window.localStorage.setItem(localKey, updateFilesForLocal);
  }, [state]);
    
    
    return [state, setState]
}