import { useState } from "react";
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  //binders for the input fields.
  const inputBinds = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };

  const resetValue = () => {
    setValue(initialValue);
  };

  return [value, setValue, inputBinds, resetValue];
};

export default useInput;
