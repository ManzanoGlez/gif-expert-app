import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ setCategories }) {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length >= 1) {
      setCategories((category) => [inputValue,...category]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={"Categoría"}
      />
    </form>
  );
}


AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired
};
