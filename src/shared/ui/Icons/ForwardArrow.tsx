import * as React from "react";

const ForwardArrow: React.FC<React.SVGProps<SVGElement>> = ({ width=29, height=28, color="#6A0BFF" }) => (
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
      x="0.5"
      y="-0.5"
      stroke={color}
      rx="13.5"
      transform="matrix(1 0 0 -1 .5 27)"
    ></rect>
    <path
      fill={color}
      fillRule="evenodd"
      d="M15.723 19.442c.244.244.64.244.884 0l5-5a.625.625 0 0 0 0-.884l-5-5a.625.625 0 0 0-.884.884l3.934 3.933H7.832a.625.625 0 1 0 0 1.25h11.825l-3.934 3.933a.625.625 0 0 0 0 .884"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ForwardArrow;
