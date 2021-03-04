import React, { useEffect, useState } from "react";

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const showOptions = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);

    setIsOpen(false);
  };

  const options = [
    "Basic Pack Free",
    "Pro Pack $9.99",
    "Ultimate Pack $19.99",
    // {
    //   packName: "Basic Pack",
    //   price: "Free",
    // },
    // {
    //   packName: "Pro Pack",
    //   price: "$9.99",
    // },
    // {
    //   packName: "Ultimate Pack",
    //   price: "$19.99",
    // },
  ];

  return (
    <>
      <div className="custom-select">
        <button
          type="button"
          className="custom-select__button"
          onClick={showOptions}
        >
          <p>{selectedOption || options[0]}</p>
          {/* {(
            <p>
              {options[0].packName} <span>{options[0].price}</span>
            </p>
          ) || (
            <p>
              selectedOption.packName <span>selectedOptions.price</span>
            </p>
          )} */}
          <div
            style={
              isOpen
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
            className="custom-select__carret"
          >
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
        {isOpen && (
          <div className="custom-select__options">
            <ul className="custom-select__list">
              {options.map((option, index) => (
                <li onClick={onOptionClicked(option)} key={index}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
