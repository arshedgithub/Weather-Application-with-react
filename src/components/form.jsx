import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.city.value);
  };
  return (
    <form className="my-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="px-2"
        placeholder="seacch city"
        name="city"
        autoComplete="off"
      />
      <button className="mx-1 border-0 rounded px-2" type="submit">
        get weather
      </button>
    </form>
  );
};

export default Form;
