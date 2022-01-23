import { BigNumber } from "ethers";

import { ProposalState } from "../../src/utils/proposals";
import ProposalPane from "../../src/views/proposal_pane";

import type { Proposal } from "../../src/utils/proposals";
import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Proposal Pane",
  component: ProposalPane,
};

const FAKE_PROPOSAL: Proposal = {
  block: 0,
  transactionHash: "0x0000",
  id: BigNumber.from(345678905897657),
  order: 0,
  proposer: "0x0000",
  name: "Fake Proposal",
  description: "This is my super fake proposal.",
  state: ProposalState.ACTIVE,
  votes: {
    againstVotes: BigNumber.from(3),
    forVotes: BigNumber.from(6),
    abstainVotes: BigNumber.from(1),
  },
};

const ProposalPaneStoryEmpty: Story = () => <ProposalPane proposal={null} />;
ProposalPaneStoryEmpty.storyName = "Proposal Pane (empty)";

interface ProposalPaneStoryPopulatedProps {
  proposal: Proposal;
}

const ProposalPaneStoryPopulated: Story<ProposalPaneStoryPopulatedProps> = ({
  proposal,
}: ProposalPaneStoryPopulatedProps) => <ProposalPane proposal={proposal} />;

ProposalPaneStoryPopulated.storyName = "Proposal Pane (populated)";
ProposalPaneStoryPopulated.args = {
  proposal: FAKE_PROPOSAL,
};

export default META;
export { ProposalPaneStoryEmpty, ProposalPaneStoryPopulated };
