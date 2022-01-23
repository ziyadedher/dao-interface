import React from "react";

import ProposalListItem from "./proposal_list_item";

import type { Proposal } from "../../utils/proposals";

interface ProposalListProps {
  readonly proposals: readonly Proposal[];
  readonly selectedProposal: Proposal | null;
  readonly onProposalClick?: (proposal: Proposal) => void;
}

const ProposalList: React.FunctionComponent<ProposalListProps> = ({
  proposals,
  selectedProposal,
  onProposalClick: handleProposalClick,
}) => (
  <div className="flex overflow-hidden flex-col rounded-md divide-y divide-gray-200">
    {proposals.map((proposal) => (
      <ProposalListItem
        key={proposal.id.toHexString()}
        proposal={proposal}
        isSelected={
          selectedProposal !== null && proposal.id === selectedProposal.id
        }
        onClick={handleProposalClick}
      />
    ))}
  </div>
);

export default ProposalList;
