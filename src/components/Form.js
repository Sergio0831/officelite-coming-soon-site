import React, { useState } from "react";
import Select from "./Select";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="signup-form">
      <form>
        <label htmlFor="name"></label>
        <input
          value={name}
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email"></label>
        <input
          value={email}
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Select />
        <label htmlFor="phone"></label>
        <input
          value={phone}
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="company"></label>
        <input
          value={company}
          type="text"
          name="company"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <button type="submit" className="btn-1">
          Get on the list
        </button>
      </form>
    </div>
  );
};

export default Form;
