import { Governor__factory as GovernorFactory } from "@dao-interface/contracts";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";

import type { BigNumber } from "ethers";

enum ProposalVote {
  AGAINST = 0,
  FOR = 1,
  ABSTAIN = 2,
}

enum ProposalState {
  UNDETERMINED = -1,
  PENDING = 0,
  ACTIVE = 1,
  CANCELLED = 2,
  DEFEATED = 3,
  SUCCEEDED = 4,
  QUEUED = 5,
  EXPIRED = 6,
  EXECUTED = 7,
}
interface Proposal {
  readonly block: number;
  readonly transactionHash: string;
  readonly id: BigNumber;
  readonly order: number;
  readonly proposer: string;
  readonly name: string;
  readonly description: string;
  readonly state: ProposalState;
  readonly votes: {
    readonly againstVotes: BigNumber;
    readonly forVotes: BigNumber;
    readonly abstainVotes: BigNumber;
  };
}

const useProposals = (contractAddress: string): Proposal[] | null => {
  const { library: provider } = useEthers();
  const [proposals, setProposals] = useState<Proposal[] | null>(null);

  const contract = useMemo(
    () =>
      typeof provider === "undefined"
        ? null
        : GovernorFactory.connect(
            ethers.utils.getAddress(contractAddress),
            provider
          ),
    [contractAddress, provider]
  );

  useEffect(() => {
    if (contract === null) return;

    const proposalCreatedEventFilter = contract.filters.ProposalCreated();

    const getProposals = async (): Promise<void> => {
      const proposalCreatedEvents = await contract.queryFilter(
        proposalCreatedEventFilter
      );

      const newProposals = await Promise.all(
        proposalCreatedEvents
          // Sort in ascending order based on block number.
          .sort((a, b) => a.blockNumber - b.blockNumber)
          .map(async (proposalCreatedEvent, i): Promise<Proposal> => {
            const {
              blockNumber,
              transactionHash,
              args: { proposalId, description, proposer },
            } = proposalCreatedEvent;
            const [proposalName] = description.split("\n");
            if (typeof proposalName === "undefined") {
              throw new Error("Proposal description is invalid.");
            }

            return {
              block: blockNumber,
              transactionHash,
              id: proposalId,
              order: i,
              proposer,
              name: proposalName,
              description,
              state: await contract.state(proposalId),
              votes: await contract.proposalVotes(proposalId),
            };
          })
      );

      setProposals(newProposals);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- nope.
    getProposals();
  }, [contract]);

  return proposals;
};

export type { Proposal };
export { useProposals, ProposalState, ProposalVote };
