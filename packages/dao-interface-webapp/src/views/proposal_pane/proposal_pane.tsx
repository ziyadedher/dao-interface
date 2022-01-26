import React from "react";

import ProposalPaneEmpty from "./proposal_pane_empty";
import ProposalPaneNew from "./proposal_pane_new";
import ProposalPanePopulated from "./proposal_pane_populated";

import type { Proposal } from "../../utils/proposals";

interface ProposalPaneProps {
  readonly proposal: Proposal | "new" | null;
  readonly onClose?: () => void;
}

const ProposalPane: React.FunctionComponent<ProposalPaneProps> = ({
  proposal,
  onClose: handleClose,
}) =>
  proposal === null ? (
    <ProposalPaneEmpty />
  ) : proposal === "new" ? (
    <ProposalPaneNew />
  ) : (
    <ProposalPanePopulated proposal={proposal} onClose={handleClose} />
  );

export default ProposalPane;
