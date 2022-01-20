import { useProposals } from "../utils/proposals";

import type { NextPage } from "next";

const Index: NextPage = () => {
  const proposals = useProposals("0xd11fA2FcFE6e21184b496c20f299Ce4B3722C737");

  return (
    <div className="container flex flex-row justify-center items-center mx-auto h-screen">
      <div className="text-center">
        <h1 className="mb-8 text-3xl">Yes, and?</h1>
        <div>
          {proposals?.map((proposal) => (
            <p key={proposal.id.toHexString()}>{proposal.id.toHexString()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
