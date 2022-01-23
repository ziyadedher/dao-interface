import classNames from "classnames";
import React from "react";

import type Color from "./color";

const getProgressBarColorClass = (color: Color): string => {
  switch (color) {
    case "green":
      return "bg-green-500";
    case "red":
      return "bg-red-500";
    case "gray":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
};

const getProgressBarPercentFilledWidth = (percentFilled: number): string =>
  `${percentFilled * 100}%`;

interface ProgressBarProps {
  readonly color: Color;
  readonly percentFilled: number;
}

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({
  color,
  percentFilled,
}) => (
  <div className="overflow-hidden w-full h-4 bg-gray-100 rounded-md">
    <div
      className={classNames("h-4", getProgressBarColorClass(color))}
      style={{ width: getProgressBarPercentFilledWidth(percentFilled) }}
    />
  </div>
);

export default ProgressBar;
