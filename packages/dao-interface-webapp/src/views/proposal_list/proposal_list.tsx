import React from "react";

import ProposalListItem from "./proposal_list_item";
import ProposalListNewProposalItem from "./proposal_list_new_item";

import type { Proposal, ProposalReturn } from "../../utils/proposals";

interface ProposalListProps {
  readonly proposals: ProposalReturn;
  readonly selectedProposal: Proposal | "new" | null;
  readonly onNewProposalClick?: () => void;
  readonly onProposalClick?: (proposal: Proposal) => void;
}

const ProposalList: React.FunctionComponent<ProposalListProps> = ({
  proposals,
  selectedProposal,
  onNewProposalClick: handleNewProposalClick,
  onProposalClick: handleProposalClick,
}) => (
  <div className="flex flex-col h-full">
    <ProposalListNewProposalItem
      onClick={handleNewProposalClick}
      isSelected={selectedProposal === "new"}
    />
    <div className="flex overflow-y-auto flex-col divide-y divide-gray-200">
      {proposals.state === "ready"
        ? proposals.proposals
            .sort((a, b) => b.order - a.order)
            .map((proposal) => (
              <ProposalListItem
                key={proposal.id.toHexString()}
                proposal={proposal}
                isSelected={
                  selectedProposal !== null &&
                  selectedProposal !== "new" &&
                  proposal.id === selectedProposal.id
                }
                onClick={handleProposalClick}
              />
            ))
        : null}
    </div>
  </div>
);

export default ProposalList;
