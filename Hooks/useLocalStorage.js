import {useState,useEffect}from 'react'

const key = "docState";


export default function useLocalStorage(initialValue) {
  const [state, setState] = useState(() => {
    try {
      const storedItem = window.localStorage.getItem("docState");
      return JSON.parse(storedItem);
    } catch (error) {
      // If error also return initialValue

      console.log(error);

      return initialValue;
    }
  });

  //   useEffect(() => {
  //     localStorage.setItem("docState", JSON.stringify(docState));
  //   }, [docState]);
  return [state, setState];
}

