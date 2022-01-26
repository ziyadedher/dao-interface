import React from "react";

import { getEtherscanLink } from "../../utils/hex";

import TextLink from "./text_link";

import type { HexType } from "../../utils/hex";

interface HexLinkProps {
  readonly type: HexType;
  readonly hex: string;
  readonly maxLength?: number;
}

const HexLink: React.FunctionComponent<HexLinkProps> = ({
  type,
  hex,
  maxLength = 4,
}) => (
  <TextLink href={getEtherscanLink(hex, type)} isExternal>
    {hex.slice(0, maxLength + 2)}
  </TextLink>
);

export default HexLink;
