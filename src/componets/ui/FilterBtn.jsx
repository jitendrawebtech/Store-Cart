import { useState } from "react";

const FilterBtn = ({ forFilterVal = [], defaultText }) => {
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


  return (
    <select
      className="border p-2 text-xs rounded-md capitalize"
      value={selectedVal}
      onChange={(e) => setSelectedVal(e.target.value)}
    >
      <option value="all">{defaultText}</option>
      {normalizedOptions.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default FilterBtn;
