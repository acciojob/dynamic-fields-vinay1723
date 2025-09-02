import React from "react";
import "./../styles/App.css";
import { useState } from "react";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  function addField() {
    setFields((fields) => [...fields, { name: "", age: "" }]);
  }
  function removeField(index, e) {
    e.stopPropagation();
    const values = [...fields];
    values.splice(index, 1);
    setFields(values);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(fields);
  }
  function handleChange(e, index) {
    const values = [...fields];
    values[index][e.target.name] = e.target.value;
    setFields(values);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={field.name}
              onChange={(e) => handleChange(e, index)}
            />
            <input
              type="number"
              placeholder="age"
              name="Age"
              value={field.age}
              onChange={(e) => handleChange(e, index)}
            />
            <button type="button" onClick={(e) => removeField(index, e)}>
              Remove
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <button onClick={addField}>Add More...</button>
      <p>After clicking submit check console for data</p>
    </div>
  );
};

export default App;
