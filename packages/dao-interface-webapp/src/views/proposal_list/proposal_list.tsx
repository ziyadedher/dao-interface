import React from "react";

import ProposalListItem from "./proposal_list_item";

import type { Proposal } from "../../utils/proposals";

interface ProposalListProps {
  readonly proposals: readonly Proposal[];
}

const ProposalList: React.FunctionComponent<ProposalListProps> = ({
  proposals,
}) => (
  <div className="flex overflow-hidden flex-col rounded-md divide-y divide-gray-200 shadow-md">
    {proposals.map((proposal) => (
      <ProposalListItem key={proposal.id.toHexString()} proposal={proposal} />
    ))}
  </div>
);

export default ProposalList;
