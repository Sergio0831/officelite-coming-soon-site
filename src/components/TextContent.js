import React from "react";

const TextContent = (props) => {
  const { heading, paragraph } = props;

  return (
    <>
      <h1 className="section__content-heading">{heading}</h1>
      <p className="section__content-p">{paragraph}</p>
    </>
  );
};

export default TextContent;
