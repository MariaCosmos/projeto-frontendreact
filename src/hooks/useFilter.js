import { useState } from "react";

export const useFilter = (initialState) =>{
  const [inputs, setFilter] = useState(initialState)

  const onChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...inputs, [name]: value });
  };

  return [inputs, onChange]
}