const HEX_TYPES = ["address", "tx"] as const;

type HexType = typeof HEX_TYPES[number];

const getEtherscanLink = (address: string, type: HexType): string =>
  `https://rinkeby.etherscan.io/${type}/${address}`;

export { HEX_TYPES };
export type { HexType };
export { getEtherscanLink };
