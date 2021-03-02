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
        <div className="custom-select">
          <button type="button" className="custom-select__button">
            <p>
              Basic Pack <span>Free</span>
            </p>
            <div className="custom-select__carret">
              <svg width="13" height="8" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#5175FF"
                  strokeWidth="2"
                  d="M1 1l5.5 5.5L12 1"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </button>
          <div className="custom-select__options">
            <ul className="custom-select__list">
              <li>
                Basic Pack <span>Free</span>
              </li>
              <li>
                Pro Pack <span>$9.99</span>
              </li>
              <li>
                Ultimate Pack <span>$19.99</span>
              </li>
            </ul>
          </div>
        </div>
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
        <button type="submit" className="btn-1 btn-submit">
          Get on the list
        </button>
      </form>
    </div>
  );
};

export default Form;
