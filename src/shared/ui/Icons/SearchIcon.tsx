import * as React from "react";

const SearchIcon: React.FC<React.SVGProps<SVGElement>> = ({width = 20, height = 20}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill="#A3A3A3"
      fillRule="evenodd"
      d="M9.585 2.293a7.292 7.292 0 1 0 0 14.583 7.292 7.292 0 0 0 0-14.583M1.043 9.585a8.542 8.542 0 1 1 15.007 5.581l2.727 2.727a.625.625 0 1 1-.884.884l-2.727-2.727A8.542 8.542 0 0 1 1.042 9.584"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default SearchIcon;
