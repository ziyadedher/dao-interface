import { X, XSquare } from "phosphor-react";
import React, { useCallback } from "react";

import HexLink from "../../components/links/hex_link";

import ProposalPaneVotes from "./proposal_pane_votes";

import type { Proposal } from "../../utils/proposals";

interface ProposalPanePopulatedProps {
  readonly proposal: Proposal;
  readonly onClose?: () => void;
}

const ProposalPanePopulated: React.FunctionComponent<
  ProposalPanePopulatedProps
> = ({ proposal, onClose }) => {
  const handleClosePress: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      if (typeof onClose === "undefined") return;
      onClose();
    }, [onClose]);

  return (
    <div className="flex relative flex-col gap-8 p-8 text-sm text-gray-800">
      <button
        type="button"
        onClick={handleClosePress}
        className="inline-flex absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-all"
      >
        <X size={16} weight="bold" />
      </button>

      <div className="flex flex-col">
        <p className="text-xs text-gray-500">
          Proposal #{proposal.order} &mdash;{" "}
          {proposal.id.toHexString().slice(0, 8)}
        </p>
        <h2 className="text-2xl font-bold">{proposal.name}</h2>
      </div>
      <ProposalPaneVotes votes={proposal.votes} />
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
