import * as React from "react";

const ItemQuestionEllipse: React.FC<React.SVGProps<SVGElement>> = ({width = 8, height = 8}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 8 8"
  >
    <circle cx="4" cy="4" r="4" fill="#53F"></circle>
  </svg>
);

export default ItemQuestionEllipse;
