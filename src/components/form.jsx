import React from "react";

const Form = ({ onSubmit, loc }) => {
  if (loc) return null;
  return (
    <form className="my-3" onSubmit={onSubmit}>
      <input
        type="text"
        className="px-2 rounded"
        placeholder="seach city"
        name="city"
        autoComplete="off"
      />
      <button className="mx-2 border-0 rounded px-2" type="submit">
        get weather
      </button>
    </form>
  );
};

export default Form;
