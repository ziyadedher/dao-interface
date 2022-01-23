import Badge from "../../src/components/badge";
import { Colors } from "../../src/components/color";

import type Color from "../../src/components/color";
import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Badge",
  component: Badge,
};

interface BadgeStoryProps {
  readonly color: Color;
  readonly text: string;
  readonly hasDot: boolean;
}

const BadgeStory: Story<BadgeStoryProps> = ({
  color,
  text,
  hasDot,
}: BadgeStoryProps) => (
  <Badge color={color} hasDot={hasDot}>
    {text}
  </Badge>
);
BadgeStory.storyName = "Badge";
BadgeStory.args = {
  color: "green",
  text: "Badge",
  hasDot: false,
};
BadgeStory.argTypes = {
  color: {
    options: Colors,
    control: { type: "select" },
  },
};

export default META;
export { BadgeStory };
