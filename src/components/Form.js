import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const pattern = new RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const formSubmit = (e) => {
    e.preventDefault();

    setData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
  };

  return (
    <div className="signup-form">
      <form onSubmit={formSubmit} id="form">
        <label htmlFor="name"></label>
        <input
          value={data.name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={inputEvent}
        />
        <label htmlFor="email"></label>
        <div className="email">
          <input
            id="email"
            value={data.email}
            type="text"
            name="email"
            placeholder="Email Address"
            className={!pattern.test(data.email) ? "error" : ""}
            onChange={inputEvent}
          />
        </div>
        <select name="packs" id="packs">
          <option value="basic">Basic Pack Free</option>
          <option value="pro">Pro Pack $9.99</option>
          <option value="basic">Ultimate Pack $19.99</option>
        </select>
        <label htmlFor="phone"></label>
        <input
          value={data.phone}
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={inputEvent}
        />
        <label htmlFor="company"></label>
        <input
          value={data.company}
          type="text"
          name="company"
          placeholder="Company"
          onChange={inputEvent}
        />
        <button type="submit" className="btn-1">
          Get on the list
        </button>
      </form>
    </div>
  );
};

export default Form;
