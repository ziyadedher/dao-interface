import React from "react";

import ProposalListItem from "./proposal_list_item";

import type { Proposal, ProposalReturn } from "../../utils/proposals";

interface ProposalListProps {
  readonly proposals: ProposalReturn;
  readonly selectedProposal: Proposal | null;
  readonly onProposalClick?: (proposal: Proposal) => void;
}

const ProposalList: React.FunctionComponent<ProposalListProps> = ({
  proposals,
  selectedProposal,
  onProposalClick: handleProposalClick,
}) => (
  <div className="flex flex-col divide-y divide-gray-200">
    {proposals.state === "ready"
      ? proposals.proposals.map((proposal) => (
          <ProposalListItem
            key={proposal.id.toHexString()}
            proposal={proposal}
            isSelected={
              selectedProposal !== null && proposal.id === selectedProposal.id
            }
            onClick={handleProposalClick}
          />
        ))
      : null}
  </div>
);

export default ProposalList;
