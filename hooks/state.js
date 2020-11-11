import { useState } from "react"

export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const handleToggle = () => setState(!state);

  return [state, handleToggle];
}