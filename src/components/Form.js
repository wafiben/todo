import React from "react";

function Form({ handleChange, handleSubmit, input }) {
  return (
    <div>
      <input onChange={handleChange} value={input} />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default Form;
