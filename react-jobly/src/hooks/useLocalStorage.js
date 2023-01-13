import { useState } from "react";

export default function useLocalStorage(key) {
  const _key = localStorage.getItem(key);
  const [value, setValueState] = useState(_key === "null" ? null : _key);

  const setValue = (value) => {
    localStorage.setItem(key, value);
    setValueState(value);
  };

  return [value, setValue];
}
