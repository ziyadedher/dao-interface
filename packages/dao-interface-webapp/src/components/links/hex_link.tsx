import React from "react";

import { getEtherscanLink } from "../../utils/hex";

import TextLink from "./text_link";

import type { HexType } from "../../utils/hex";

interface HexLinkProps {
  readonly type: HexType;
  readonly hex: string;
  readonly maxLength?: number | null;
}

const HexLink: React.FunctionComponent<HexLinkProps> = ({
  type,
  hex,
  maxLength = null,
}) => (
  <TextLink href={getEtherscanLink(hex, type)} isExternal>
    {maxLength === null ? hex : hex.slice(0, maxLength + 2)}
  </TextLink>
);

export default HexLink;
