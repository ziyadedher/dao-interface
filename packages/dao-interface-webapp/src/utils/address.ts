const getEtherscanLink = (address: string): string =>
  `https://rinkeby.etherscan.io/address/${address}`;

// eslint-disable-next-line import/prefer-default-export -- only export for now.
export { getEtherscanLink };
