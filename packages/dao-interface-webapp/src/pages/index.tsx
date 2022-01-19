import Link from "next/link";
import { useEffect } from "react";

import Anchor from "../logic/anchor";
import { useProposals } from "../utils/proposals";

import type { NextPage } from "next";

const Index: NextPage = () => {
  const proposals = useProposals("0xd11fA2FcFE6e21184b496c20f299Ce4B3722C737");

  useEffect(() => {
    console.log(proposals);
  }, [proposals]);

  return (
    <div className="container flex flex-row justify-center items-center mx-auto h-screen">
      <div className="text-center">
        <h1 className="text-6xl text-gray-700">Hello, world!</h1>
        <h2 className="pt-4">
          This is{" "}
          <span className="text-blue-500 hover:text-blue-700">
            <Link href="https://twitter.com/ziyadedher" passHref>
              <Anchor shouldOpenInNewPage>@ziyadedher</Anchor>
            </Link>
          </span>
          &rsquo;s webapp template.
        </h2>
        <h3 className="pt-3">
          Check this template out on{" "}
          <span className="text-blue-500 hover:text-blue-700">
            <Link href="https://github.com/ziyadedher/webdev-template" passHref>
              <Anchor shouldOpenInNewPage>GitHub</Anchor>
            </Link>
          </span>
          !
        </h3>
      </div>
    </div>
  );
};

export default Index;
