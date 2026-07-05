import { useState } from "react";
import { useDispatch } from "react-redux";

const FilterBtn = ({ forFilterVal = [], defaultText, onChange }) => {

  const [selectedVal, setSelectedVal] = useState("all");

  const normalizedOptions = forFilterVal.map((item) => {
    if (typeof item === "string") {
      return { value: item, label: item };
    }

    if (typeof item === "object" && item !== null) {
      return item;
    }

    return { value: "", label: "" };
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedVal(value);
    onChange?.(value);
  };

  return (
    <select
      className="border p-2 text-xs rounded-md capitalize"
      value={selectedVal}
      onChange={handleChange}
    >
      <option value="">{defaultText}</option>
      {normalizedOptions.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterBtn;
