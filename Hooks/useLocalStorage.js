import {useState,useEffect}from 'react'

const key = "docState";


export default function useLocalStorage(initialValue) {
  const [state, setState] = useState(() => {
    const storedItem = window.localStorage.getItem("docState");
    if (storedItem) {
      return JSON.parse(storedItem);
    } else {
      return []
    }
  })
  return [state, setState];
}
