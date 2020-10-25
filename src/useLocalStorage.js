import { useEffect } from "react";

const useLocalStorage = (key, state, setState = null) => {
  //loading the value from localStorage when instantiated
  useEffect(() => {
    if (setState) {
      const stored = localStorage.getItem(key);
      if (stored) setState(JSON.parse(stored));
    }
  }, []);

  //whenever this value changes, we store it in the localstorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
};

export default useLocalStorage;
