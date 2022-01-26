import React from "react";

import { getEtherscanLink } from "../../utils/address";

import TextLink from "./text_link";

interface AddressLinkProps {
  readonly address: string;
  readonly maxLength?: number;
}

const AddressLink: React.FunctionComponent<AddressLinkProps> = ({
  address,
  maxLength = 4,
}) => (
  <TextLink href={getEtherscanLink(address)} isExternal>
    {address.slice(0, maxLength + 2)}
  </TextLink>
);

export default AddressLink;
