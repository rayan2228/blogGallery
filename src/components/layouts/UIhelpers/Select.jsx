import React from "react";

const Select = ({ options }) => {
  return (
    <select>
      {options?.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
};

export default Select;
