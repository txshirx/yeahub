import * as React from "react";

const BackArrow: React.FC<React.SVGProps<SVGElement>> = ({ width=29, height=28, color="#6A0BFF" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 29 28"
  >
    <rect
      width="27"
      height="27"
      x="1"
      y="0.5"
      stroke={color}
      rx="13.5"
    ></rect>
    <path
      fill={color}
      fillRule="evenodd"
      d="M13.274 8.558a.625.625 0 0 1 0 .884l-3.933 3.933h11.824a.625.625 0 0 1 0 1.25H9.341l3.933 3.933a.625.625 0 1 1-.884.884l-5-5a.625.625 0 0 1 0-.884l5-5a.625.625 0 0 1 .884 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default BackArrow;
