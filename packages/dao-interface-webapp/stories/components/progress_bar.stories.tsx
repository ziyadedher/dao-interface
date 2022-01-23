import { Colors } from "../../src/components/color";
import ProgressBar from "../../src/components/progress_bar";

import type Color from "../../src/components/color";
import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Progress Bar",
  component: ProgressBar,
};

interface ProgressBarStoryProps {
  readonly color: Color;
  readonly percentFilled: number;
}

const ProgressBarStory: Story<ProgressBarStoryProps> = ({
  color,
  percentFilled,
}: ProgressBarStoryProps) => (
  <ProgressBar color={color} percentFilled={percentFilled} />
);
ProgressBarStory.storyName = "Progress Bar";
ProgressBarStory.args = {
  color: "green",
  percentFilled: 0.25,
};
ProgressBarStory.argTypes = {
  color: {
    options: Colors,
    control: { type: "select" },
  },
  percentFilled: {
    control: { type: "range", min: 0, max: 1, step: 0.01 },
  },
};

export default META;
export { ProgressBarStory };
