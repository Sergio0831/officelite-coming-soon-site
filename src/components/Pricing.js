import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="inner-container">
      <div className="card-row">
        <PricingCard
          title="Basic"
          price="Free"
          priceDescription="Up to 5 users for free"
          description="Basic document collaboration"
          storage="2 GB storage"
          support="Great security and support"
        />
        <PricingCard
          title="Pro"
          price="$9.99"
          priceDescription="Per user, billed monthly"
          description="All essential integrations"
          storage="50 GB storage"
          support="More control and insights"
        />
        <PricingCard
          title="Ultimate"
          price="$19.99"
          priceDescription="Per user, billed monthly"
          description="Robust work management"
          storage="100 GB storage"
          support="VIP support"
        />
      </div>
    </div>
  );
};

export default Pricing;
