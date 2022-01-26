import { Plus } from "phosphor-react";
import React, { useCallback } from "react";

interface ProposalListNewItemProps {
  readonly onClick?: () => void;
}

const ProposalListNewItem: React.FunctionComponent<
  ProposalListNewItemProps
> = ({ onClick }) => {
  const handleClick = useCallback(() => {
    if (typeof onClick === "undefined") return;
    onClick();
  }, [onClick]);

  return (
    <div className="flex flex-row p-4 bg-gray-50 border-b border-gray-200">
      <button
        type="button"
        onClick={handleClick}
        className="flex flex-row flex-1 gap-4 justify-center items-center p-4 text-sm text-gray-400 hover:bg-gray-100 rounded-lg border-2 border-gray-200 border-dashed hover:shadow-inner transition-all"
      >
        <Plus size={16} weight="bold" />
        Create New Proposal
      </button>
    </div>
  );
};

export default ProposalListNewItem;
