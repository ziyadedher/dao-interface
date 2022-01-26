import React from "react";

import ProposalPaneEmpty from "./proposal_pane_empty";
import ProposalPanePopulated from "./proposal_pane_populated";

import type { Proposal } from "../../utils/proposals";

interface ProposalPaneProps {
  readonly proposal: Proposal | null;
}

const ProposalPane: React.FunctionComponent<ProposalPaneProps> = ({
  proposal,
}) =>
  proposal === null ? (
    <ProposalPaneEmpty />
  ) : (
    <ProposalPanePopulated proposal={proposal} />
  );

export default ProposalPane;
