import React from "react";
import PricingCard from "./PricingCard";
import CardContent from "./CardContent";

const Pricing = () => {
  return (
    <div className="inner-container">
      <div className="card-row">
        {CardContent.map((val, index) => {
          return (
            <PricingCard
              key={index}
              title={val.title}
              price={val.price}
              priceDescription={val.priceDescription}
              description={val.description}
              storage={val.storage}
              support={val.support}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
