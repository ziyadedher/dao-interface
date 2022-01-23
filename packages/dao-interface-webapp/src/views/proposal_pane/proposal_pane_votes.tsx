import React from "react";

import ProgressBar from "../../components/progress_bar";
import { ProposalVote } from "../../utils/proposals";

import type { ProgressBarColor } from "../../components/progress_bar";
import type { ProposalVotes } from "../../utils/proposals";

interface ProposalVoteMetadata {
  readonly voteName: string;
  readonly color: ProgressBarColor;
}

const getProposalVoteName = (
  proposalVote: ProposalVote
): ProposalVoteMetadata => {
  switch (proposalVote) {
    case ProposalVote.FOR:
      return { voteName: "For", color: "green" };
    case ProposalVote.AGAINST:
      return { voteName: "Against", color: "red" };
    case ProposalVote.ABSTAIN:
      return { voteName: "Abstain", color: "gray" };
    default:
      return { voteName: "Unknown", color: "gray" };
  }
};

interface ProposalPaneVotesCardProps {
  readonly vote: ProposalVote;
  readonly numVotes: number;
  readonly totalVotes: number;
}

const ProposalPaneVotesCard: React.FunctionComponent<
  ProposalPaneVotesCardProps
> = ({ vote, numVotes, totalVotes }) => {
  const { voteName, color } = getProposalVoteName(vote);

  return (
    <div className="flex overflow-hidden flex-col gap-4 p-4 w-64 rounded-md border border-gray-300">
      <div className="flex flex-row justify-between text-sm">
        <h4 className="font-bold">{voteName}</h4>
        <p className="text-sm">
          <span className="font-bold">{numVotes}</span> / {totalVotes}
        </p>
      </div>
      <ProgressBar color={color} percentFilled={numVotes / totalVotes} />
    </div>
  );
};

interface ProposalPaneVotesInterface {
  readonly votes: ProposalVotes;
}

const ProposalPaneVotes: React.FunctionComponent<
  ProposalPaneVotesInterface
> = ({ votes }) => {
  const { forVotes, againstVotes, abstainVotes } = votes;
  const totalVotes = forVotes.add(againstVotes).add(abstainVotes);
  return (
    <div className="flex flex-col gap-4 w-full sm:flex-row sm:gap-8">
      <ProposalPaneVotesCard
        vote={ProposalVote.FOR}
        numVotes={forVotes.toNumber()}
        totalVotes={totalVotes.toNumber()}
      />
      <ProposalPaneVotesCard
        vote={ProposalVote.AGAINST}
        numVotes={againstVotes.toNumber()}
        totalVotes={totalVotes.toNumber()}
      />
      <ProposalPaneVotesCard
        vote={ProposalVote.ABSTAIN}
        numVotes={abstainVotes.toNumber()}
        totalVotes={totalVotes.toNumber()}
      />
    </div>
  );
};

export default ProposalPaneVotes;
