import React from "react";

import ProposalPaneEmpty from "./proposal_pane_empty";
import ProposalPanePopulated from "./proposal_pane_populated";

import type { Proposal } from "../../utils/proposals";

interface ProposalPaneProps {
  readonly proposal: Proposal | null;
}

const ProposalPane: React.FunctionComponent<ProposalPaneProps> = ({
  proposal,
}) => (
  <div className="w-full bg-gray-50">
    {proposal === null ? (
      <ProposalPaneEmpty />
    ) : (
      <ProposalPanePopulated proposal={proposal} />
    )}
  </div>
);

export default ProposalPane;
