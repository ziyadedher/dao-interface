import { BigNumber } from "ethers";

import { ProposalState } from "../../src/utils/proposals";
import ProposalList from "../../src/views/proposal_list";

import type { Proposal } from "../../src/utils/proposals";
import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Proposal List",
  component: ProposalList,
};

const FAKE_PROPOSAL_0: Proposal = {
  block: 1234,
  transactionHash: "0x0000",
  id: BigNumber.from(345678905897657),
  order: 0,
  proposer: "0x0000",
  name: "Fake Proposal 0",
  description: "This is my super fake proposal. This one is executed!",
  state: ProposalState.EXECUTED,
  votes: {
    againstVotes: BigNumber.from(3),
    forVotes: BigNumber.from(6),
    abstainVotes: BigNumber.from(1),
  },
};

const FAKE_PROPOSAL_1: Proposal = {
  block: 2512,
  transactionHash: "0x0000",
  id: BigNumber.from(345678905897657),
  order: 1,
  proposer: "0x0000",
  name: "Fake Proposal 1",
  description: "This is my super fake proposal. This one is expired!",
  state: ProposalState.EXPIRED,
  votes: {
    againstVotes: BigNumber.from(3),
    forVotes: BigNumber.from(6),
    abstainVotes: BigNumber.from(1),
  },
};

const FAKE_PROPOSAL_2: Proposal = {
  block: 4278,
  transactionHash: "0x0000",
  id: BigNumber.from(345678905897657),
  order: 2,
  proposer: "0x0000",
  name: "Fake Proposal 2",
  description: "This is my super fake proposal. This one is defeated!",
  state: ProposalState.DEFEATED,
  votes: {
    againstVotes: BigNumber.from(3),
    forVotes: BigNumber.from(6),
    abstainVotes: BigNumber.from(1),
  },
};

const FAKE_PROPOSAL_3: Proposal = {
  block: 5710,
  transactionHash: "0x0000",
  id: BigNumber.from(345678905897657),
  order: 3,
  proposer: "0x0000",
  name: "Fake Proposal 3",
  description: "This is my super fake proposal. This one is active!",
  state: ProposalState.ACTIVE,
  votes: {
    againstVotes: BigNumber.from(3),
    forVotes: BigNumber.from(6),
    abstainVotes: BigNumber.from(1),
  },
};

interface ProposalListStoryProps {
  readonly proposals: readonly Proposal[];
}

const ProposalListStory: Story<ProposalListStoryProps> = ({
  proposals,
}: ProposalListStoryProps) => (
  <ProposalList proposals={proposals} selectedProposal={null} />
);

ProposalListStory.storyName = "Proposal List";
ProposalListStory.args = {
  proposals: [
    FAKE_PROPOSAL_0,
    FAKE_PROPOSAL_1,
    FAKE_PROPOSAL_2,
    FAKE_PROPOSAL_3,
  ],
};

export default META;
export { ProposalListStory };
