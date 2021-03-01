import React from "react";

const Select = () => {
  return (
    <div className="select-box">
      <div className="options-container">
        <div className="option">
          <input type="radio" className="radio" id="basic" name="category" />
          <label htmlFor="basic">
            Basic Pack <span>Free</span>
          </label>
        </div>

        <div className="option">
          <input type="radio" className="radio" id="pro" name="category" />
          <label htmlFor="pro">
            Pro Pack <span>$9.99</span>
          </label>
        </div>

        <div className="option">
          <input type="radio" className="radio" id="ultimate" name="category" />
          <label htmlFor="ultimate">
            Ultimate Pack <span>$19.99 </span>
          </label>
        </div>
      </div>

      <div className="selected">
        Basic Pack <span>Free</span>
      </div>
    </div>
  );
};

export default Select;
