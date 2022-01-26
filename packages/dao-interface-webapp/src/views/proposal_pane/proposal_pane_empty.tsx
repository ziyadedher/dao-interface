import { CircleDashed } from "phosphor-react";
import React from "react";

const ProposalPaneEmpty: React.FunctionComponent = () => (
  <div className="flex flex-col gap-4 justify-center items-center p-4 h-full text-gray-500">
    <span>
      <CircleDashed size={64} />
    </span>
    <div className="text-center">
      <p className="font-bold">Select a proposal to get started.</p>
      <p>Choose a proposal to browse from the selector.</p>
    </div>
  </div>
);

export default ProposalPaneEmpty;
