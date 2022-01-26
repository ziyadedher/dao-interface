type HexType = "address" | "tx";

const getEtherscanLink = (address: string, type: HexType): string =>
  `https://rinkeby.etherscan.io/${type}/${address}`;

export type { HexType };
export { getEtherscanLink };
