import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });
  const [showName, setShowName] = useState(false);
  const handleChange = (e) => {
    const [key, value] = [e.target.name, e.target.value];
    setForm({
      ...form,
      [key]: value,
    });
  };
  const handleFocus = (e) => {
    setShowName(false);
  };
  return (
    <div>
      <h1>Full Name Display</h1>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={(e) => {
          e.preventDefault();
          setShowName(true);
        }}
      >
        <div>
          <label for="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
        </div>
        <div>
          <label for="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={handleChange}
            onFocus={handleFocus}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {showName ? <p>{`Full Name: ${form.firstName} ${form.lastName}`} </p> : <></>}
    </div>
  );
};
export default Form;
