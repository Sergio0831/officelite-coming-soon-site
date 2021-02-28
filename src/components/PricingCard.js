import React from "react";

const PricingCard = (props) => {
  const {
    title,
    price,
    priceDescription,
    description,
    storage,
    support,
  } = props;
  return (
    <div className="card">
      <h4 className="card__title">{title}</h4>
      <div className="card__price">
        <h2 className="price">{price}</h2>
        <p className="price__description">{priceDescription}</p>
      </div>
      <ul className="card__list">
        <li className="card__list-item">{description}</li>
        <li className="card__list-item">{storage}</li>
        <li className="card__list-item">{support}</li>
      </ul>
      <button className={title === "Pro" ? "btn-3" : "btn-2"}>
        Try for Free
      </button>
    </div>
  );
};

export default PricingCard;
