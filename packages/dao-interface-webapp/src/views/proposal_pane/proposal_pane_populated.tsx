import React from "react";

import HexLink from "../../components/links/hex_link";

import ProposalPaneVotes from "./proposal_pane_votes";

import type { Proposal } from "../../utils/proposals";

interface ProposalPanePopulatedProps {
  readonly proposal: Proposal;
  readonly onClose: () => void;
}

const ProposalPanePopulated: React.FunctionComponent<
  ProposalPanePopulatedProps
> = ({ proposal, onClose }) => {
  const handleClosePress: React.MouseEventHandler<HTMLButtonElement> = () => {
    onClose();
  };

  return (
    <div className="flex flex-col gap-8 p-8 text-sm text-gray-800">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{proposal.name}</h2>
        <p className="text-xs text-gray-500">
          Proposal ID {proposal.id.toHexString()}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ProposalPaneVotes votes={proposal.votes} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">Description</h3>
        <p>{proposal.description}</p>
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">Details</h3>
        <p className="">
          Proposed by{" "}
          <HexLink type="address" hex={proposal.proposer} maxLength={4} /> at{" "}
          <HexLink type="tx" hex={proposal.transactionHash} maxLength={8} />.
        </p>
      </div>
    </div>
  );
};

export default ProposalPanePopulated;
