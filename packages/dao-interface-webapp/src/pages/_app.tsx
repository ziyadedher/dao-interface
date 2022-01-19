// eslint-disable-next-line import/no-unassigned-import, node/file-extension-in-import -- Tailwind CSS exception.
import "tailwindcss/tailwind.css";

import { ChainId, DAppProvider } from "@usedapp/core";

import type { Config as DAppConfig } from "@usedapp/core";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";

const DAPP_CONFIG: DAppConfig = {
  readOnlyChainId: ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      "https://eth-rinkeby.alchemyapi.io/v2/kVqHd-XjYAEsuaSleB2kgb1Dc4uJcJfY",
  },
  autoConnect: true,
};

// eslint-disable-next-line @typescript-eslint/naming-convention -- Next.js patterns.
const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <DAppProvider config={DAPP_CONFIG}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading -- Next.js patterns. */}
    <Component {...pageProps} />
  </DAppProvider>
);

export default App;
