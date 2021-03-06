import React, { useEffect, useState } from "react";


export function useLocalStorage(localKey, defaultData=[]) {
  
const [state, setState] = useState(() => {
  const savedFileLocal = window.localStorage.getItem(localKey);
  if (savedFileLocal) {
    return JSON.parse(savedFileLocal);
  } 
    return defaultData;
});

useEffect(() => {
  window.localStorage.setItem(localKey, JSON.stringify(state));
}, [localKey,state]);
  return [state,setState];
}