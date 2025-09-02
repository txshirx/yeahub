import * as React from "react";

const ComeBackArrow: React.FC<React.SVGProps<SVGElement>> = ({ width=24, height=24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 21"
  >
    <path
      fill="#6A0BFF"
      d="M12.943 16.308a.626.626 0 0 1-.885.884l-6.25-6.25a.624.624 0 0 1 0-.884l6.25-6.25a.625.625 0 1 1 .885.885L7.134 10.5z"
    ></path>
  </svg>
);

export default ComeBackArrow;
