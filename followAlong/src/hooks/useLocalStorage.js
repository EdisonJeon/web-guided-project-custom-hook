import { useState } from "react";
export const useLocalStorage = (key, initialValue) => {
  console.log("*** 'useLocalStorage' HOOK ***");
  console.log("variable that holds the key =>", key);
  console.log("actual value of the key =>", window.localStorage.getItem(key));
  console.log(
    "JSON.parse value of the key =>",
    JSON.parse(window.localStorage.getItem(key))
  );
  console.log("initialValue =>", initialValue);
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) return JSON.parse(window.localStorage.getItem(key));
    else return window.localStorage.setItem(key, JSON.stringify(initialValue));
    // why are we returning the initialValue here? code works without it.
    // return initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  console.log("*** 'useLocalStorage' HOOK END ***");
  return [storedValue, setValue];
};
