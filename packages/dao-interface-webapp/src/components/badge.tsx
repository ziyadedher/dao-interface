import classNames from "classnames";
import React from "react";

import type Color from "./color";

interface BadgeStyle {
  readonly backgroundColor: string;
  readonly textColor: string;
  readonly dotColor: string;
}

const getBadgeStyle = (color: Color): BadgeStyle => {
  switch (color) {
    case "green":
      return {
        backgroundColor: "bg-green-100",
        textColor: "text-green-800",
        dotColor: "bg-green-400",
      };
    case "red":
      return {
        backgroundColor: "bg-red-100",
        textColor: "text-red-800",
        dotColor: "bg-red-400",
      };
    case "gray":
      return {
        backgroundColor: "bg-gray-100",
        textColor: "text-gray-800",
        dotColor: "bg-gray-400",
      };
    default:
      return {
        backgroundColor: "bg-gray-100",
        textColor: "text-gray-800",
        dotColor: "bg-gray-400",
      };
  }
};

interface BadgeProps {
  readonly color: Color;
  readonly children?: React.ReactNode;
  readonly hasDot?: boolean;
}

const Badge: React.FunctionComponent<BadgeProps> = ({
  color,
  children,
  hasDot = false,
}) => {
  const style = getBadgeStyle(color);
  return (
    <div
      className={classNames(
        "inline-flex flex-row items-center px-2 py-0.5 rounded text-xs font-medium",
        style.backgroundColor,
        style.textColor
      )}
    >
      {hasDot ? (
        <div
          className={classNames(
            "rounded-full w-1.5 h-1.5 mr-1",
            style.dotColor
          )}
        />
      ) : null}
      {children}
    </div>
  );
};

export default Badge;
