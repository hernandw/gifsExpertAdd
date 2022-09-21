import React, { useState } from "react";

const AddInputCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const addCategory = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmitChange = (e) => {
    e.preventDefault();
    if(inputValue.trim()<=1)return
    /* setCategories((categories) => [inputValue, ...categories]); */
    onNewCategory(inputValue.trim())
    setInputValue('')
  };
  return (
    <>
      <form onSubmit={onSubmitChange}>
        <input
          type="text"
          onChange={addCategory}
          placeholder="Buscar un gifs"
          value={inputValue}
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default AddInputCategories;
