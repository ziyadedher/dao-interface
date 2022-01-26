import React from "react";

import ProposalPaneEmpty from "./proposal_pane_empty";
import ProposalPanePopulated from "./proposal_pane_populated";

import type { Proposal } from "../../utils/proposals";

interface ProposalPaneProps {
  readonly proposal: Proposal | null;
  readonly onClose?: () => void;
}

const ProposalPane: React.FunctionComponent<ProposalPaneProps> = ({
  proposal,
  onClose: handleClose,
}) =>
  proposal === null ? (
    <ProposalPaneEmpty />
  ) : (
    <ProposalPanePopulated proposal={proposal} onClose={handleClose} />
  );

export default ProposalPane;
