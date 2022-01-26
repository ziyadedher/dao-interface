import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

import HexLink from "../../components/links/hex_link";
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
    setSelectedProposal((currentProposal) =>
      currentProposal === proposal ? null : proposal
    );
  }, []);

  const handleProposalPaneClose = useCallback(() => {
    setSelectedProposal(null);
  }, []);

  return (
    <div className="flex overflow-hidden flex-col gap-8 p-8 pb-0 w-full h-screen bg-gray-50">
      <div className="flex flex-col gap-4 items-center w-full">
        <h1 className="text-4xl text-gray-800">Proposals</h1>
        <h2 className="text-sm text-gray-700">
          <HexLink type="address" hex={address as string} />
        </h2>
      </div>

      <div className="flex flex-row flex-1 w-full min-h-0 border-t border-gray-200 divide-x divide-gray-200">
        <div className="flex flex-col w-1/2 h-full">
          <ProposalList
            proposals={proposals}
            selectedProposal={selectedProposal}
            onProposalClick={handleProposalClick}
          />
        </div>
        <div className="flex overflow-y-auto flex-col w-1/2 h-full">
          <ProposalPane
            proposal={selectedProposal}
            onClose={handleProposalPaneClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ProposalPage;
