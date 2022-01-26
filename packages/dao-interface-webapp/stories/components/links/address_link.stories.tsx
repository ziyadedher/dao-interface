import AddressLink from "../../../src/components/links/address_link";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Links/Address Link",
  component: AddressLink,
};

interface AddressLinkTemplateProps {
  readonly address: string;
  readonly maxLength: number;
}

const AddressLinkTemplate: Story<AddressLinkTemplateProps> = ({
  address,
  maxLength,
}: AddressLinkTemplateProps) => (
  <AddressLink address={address} maxLength={maxLength} />
);

const AddressLinkStory = AddressLinkTemplate.bind({});
AddressLinkStory.storyName = "Address Link";
AddressLinkStory.args = {
  address: "0xd11fA2FcFE6e21184b496c20f299Ce4B3722C737",
  maxLength: 4,
};
AddressLinkStory.argTypes = {
  maxLength: {
    control: { type: "range", min: 0, max: 64, step: 1 },
  },
};

export { AddressLinkStory };
export default META;
