import * as React from "react";

const UnknownImage: React.FC<React.SVGProps<SVGElement>> = ({width=20, height=20}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    version="1"
    viewBox="0 0 40 40"
  >
    <path d="M8.2 3.2c-1.7 1.7-1.7 31.9 0 33.6 1.8 1.8 22.2 1.6 23.7-.2.8-.9 1.1-5.1.9-12.2l-.3-10.9-5.2-.3-5.2-.3-.3-5.2-.3-5.2-6-.3c-3.8-.2-6.5.2-7.3 1M23.1 17c2.6 1.4 2.6 6.6-.1 8.2-1.1.7-2 1.8-2 2.5s-.7 1.3-1.5 1.3c-2.3 0-1.9-4.7.5-5.5 1.1-.3 2-1.3 2-2.1 0-2.3-2.9-2.8-4.9-1-2.6 2.3-3.9.1-1.5-2.5 1.9-2.1 4.5-2.4 7.5-.9M21 32.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5"></path>
    <path d="M24 7v4h8.4l-3.9-4c-2.1-2.2-4-4-4.2-4S24 4.8 24 7"></path>
  </svg>
);

export default UnknownImage;
