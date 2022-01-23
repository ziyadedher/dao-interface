import classNames from "classnames";
import React, { useCallback, useState } from "react";

import { ProposalState, useProposals } from "../utils/proposals";

import type { Proposal } from "../utils/proposals";
import type { NextPage } from "next";

const getProposalStateData = (
  proposalState: ProposalState
): { title: string; color: string } => {
  switch (proposalState) {
    case ProposalState.PENDING:
      return { title: "Pending", color: "bg-gray-300" };
    case ProposalState.ACTIVE:
      return { title: "Active", color: "bg-yellow-300" };
    case ProposalState.CANCELLED:
      return { title: "Cancelled", color: "bg-red-300" };
    case ProposalState.DEFEATED:
      return { title: "Defeated", color: "bg-red-300" };
    case ProposalState.SUCCEEDED:
      return { title: "Succeeded", color: "bg-green-300" };
    case ProposalState.QUEUED:
      return { title: "Queued", color: "bg-purple-300" };
    case ProposalState.EXPIRED:
      return { title: "Expired", color: "bg-gray-300" };
    case ProposalState.EXECUTED:
      return { title: "Executed", color: "bg-green-300" };
    default:
      return { title: "Unknown", color: "bg-gray-300" };
  }
};

interface ProposalItemProps {
  proposal: Proposal;
}

const ProposalItem: React.FunctionComponent<ProposalItemProps> = ({
  proposal,
}) => {
  const proposalStateData = getProposalStateData(proposal.state);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setIsOpen((isOpenInner) => !isOpenInner);
    }, []);

  return (
    <li className="flex overflow-hidden flex-col transition-all">
      <button
        type="button"
        className="flex flex-row items-center w-full hover:bg-gray-100 transition-all"
        onClick={handleClick}
      >
        <div className="flex justify-center items-center self-stretch px-2 w-12 text-xs font-bold bg-gray-300">
          {proposal.order}
        </div>
        <div className="flex-1 py-4 px-6 text-left">{proposal.name}</div>
        <div
          className={classNames(
            "flex justify-center items-center self-stretch text-xs font-bold w-24",
            proposalStateData.color
          )}
        >
          {proposalStateData.title}
        </div>
      </button>
      <div
        className={classNames(
          "transition-all overflow-hidden",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-4 p-4">
          <div>
            <h3 className="text-sm font-bold">Votes</h3>
            <p>{proposal.votes.againstVotes.toString()}</p>
            <p>{proposal.votes.forVotes.toString()}</p>
            <p>{proposal.votes.abstainVotes.toString()}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Description</h3>
            <p>{proposal.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold">Details</h3>
            Proposed by {proposal.proposer} at {proposal.transactionHash}.
          </div>
        </div>
      </div>
    </li>
  );
};

const Index: NextPage = () => {
  const proposals = useProposals("0xd11fA2FcFE6e21184b496c20f299Ce4B3722C737");

  return (
    <div className="container flex flex-col justify-center items-center mx-auto max-w-5xl">
      <div className="flex flex-col gap-8 items-center m-8">
        <h1 className="text-4xl text-gray-800">Proposals</h1>
        <div className="overflow-hidden rounded-md shadow-md">
          <ul className="flex flex-col divide-y divide-gray-200">
            {proposals
              ?.sort((a, b) => b.order - a.order)
              .map((proposal) => (
                <ProposalItem
                  proposal={proposal}
                  key={proposal.id.toHexString()}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
