import React from "react";

import { getEtherscanLink } from "../../utils/address";

import TextLink from "./text_link";

interface HexLinkProps {
  readonly hex: string;
  readonly maxLength?: number;
}

const HexLink: React.FunctionComponent<HexLinkProps> = ({
  hex,
  maxLength = 4,
}) => (
  <TextLink href={getEtherscanLink(hex)} isExternal>
    {hex.slice(0, maxLength + 2)}
  </TextLink>
);

export default HexLink;
