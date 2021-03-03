import React, { useState } from "react";
import CustomSelect from "./CustomSelect";

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
          required
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
            required
          />
        </div>
        <CustomSelect />
        <label htmlFor="phone"></label>
        <input
          value={data.phone}
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={inputEvent}
          required
        />
        <label htmlFor="company"></label>
        <input
          value={data.company}
          type="text"
          name="company"
          placeholder="Company"
          onChange={inputEvent}
          required
        />
        <button type="submit" className="btn-1 btn-submit">
          Get on the list
        </button>
      </form>
    </div>
  );
};

export default Form;
