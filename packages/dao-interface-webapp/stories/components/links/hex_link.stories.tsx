import HexLink from "../../../src/components/links/hex_link";
import { HEX_TYPES } from "../../../src/utils/hex";

import type { HexType } from "../../../src/utils/hex";
import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Links/Hex Link",
  component: HexLink,
};

interface HexLinkTemplateProps {
  readonly type: HexType;
  readonly hex: string;
  readonly maxLength: number;
}

const HexLinkTemplate: Story<HexLinkTemplateProps> = ({
  type,
  hex,
  maxLength,
}: HexLinkTemplateProps) => (
  <HexLink type={type} hex={hex} maxLength={maxLength} />
);

const HexLinkStory = HexLinkTemplate.bind({});
HexLinkStory.storyName = "Hex Link";
HexLinkStory.args = {
  type: "address",
  hex: "0xd11fA2FcFE6e21184b496c20f299Ce4B3722C737",
  maxLength: 4,
};
HexLinkStory.argTypes = {
  type: {
    control: {
      type: "select",
      options: HEX_TYPES,
    },
  },
  maxLength: {
    control: { type: "range", min: 0, max: 64, step: 1 },
  },
};

export { HexLinkStory };
export default META;
