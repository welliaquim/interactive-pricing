import { memo } from "react";

const PatternCircles = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145">
      <g fill="none" fillRule="evenodd" stroke="#CFD8EF">
        <circle cx="63" cy="82" r="62.5" />
        <circle cx="105" cy="41" r="40.5" />
      </g>
    </svg>
  );
};

export default memo(PatternCircles);
