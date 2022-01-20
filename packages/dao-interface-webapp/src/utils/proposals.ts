import { Governor__factory as GovernorFactory } from "@dao-interface/contracts";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";

import type { BigNumber } from "ethers";

interface Proposal {
  readonly block: number;
  readonly id: BigNumber;
  readonly state: number;
  readonly votes: {
    againstVotes: BigNumber;
    forVotes: BigNumber;
    abstainVotes: BigNumber;
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
        proposalCreatedEvents.map(
          async (proposalCreatedEvent): Promise<Proposal> => {
            const {
              args: { proposalId },
            } = proposalCreatedEvent;
            return {
              block: proposalCreatedEvent.blockNumber,
              id: proposalId,
              state: await contract.state(proposalId),
              votes: await contract.proposalVotes(proposalId),
            };
          }
        )
      );

      setProposals(newProposals);
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises -- nope.
    getProposals();
  }, [contract]);

  return proposals;
};

export type { Proposal };
export { useProposals };
