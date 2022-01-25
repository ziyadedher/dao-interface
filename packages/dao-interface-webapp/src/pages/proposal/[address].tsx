import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

import { useProposals } from "../../utils/proposals";
import ProposalList from "../../views/proposal_list";
import ProposalPane from "../../views/proposal_pane";

import type { Proposal } from "../../utils/proposals";
import type { NextPage } from "next";

const ProposalPage: NextPage = () => {
  const router = useRouter();
  const {
    query: { address },
  } = router;

  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(
    null
  );
  const proposals = useProposals(address as string | undefined);

  const handleProposalClick = useCallback((proposal: Proposal) => {
    setSelectedProposal(proposal);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col gap-8 items-center p-8 w-full">
          <h1 className="text-4xl text-gray-800">Proposals</h1>
          <div className="flex flex-row gap-8 w-full">
            <div className="flex flex-col flex-1 w-1/2">
              {proposals !== null && (
                <ProposalList
                  proposals={proposals}
                  selectedProposal={selectedProposal}
                  onProposalClick={handleProposalClick}
                />
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <ProposalPane proposal={selectedProposal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
