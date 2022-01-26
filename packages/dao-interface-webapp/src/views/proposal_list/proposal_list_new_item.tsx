import classNames from "classnames";
import { CaretUp, Plus } from "phosphor-react";
import React, { useCallback } from "react";

interface ProposalListNewItemProps {
  readonly isSelected: boolean;
  readonly onClick?: () => void;
}

const ProposalListNewItem: React.FunctionComponent<
  ProposalListNewItemProps
> = ({ isSelected, onClick }) => {
  const handleClick = useCallback(() => {
    if (typeof onClick === "undefined") return;
    onClick();
  }, [onClick]);

  return (
    <div className="flex flex-row p-4 bg-gray-50 border-b border-gray-200">
      <button
        type="button"
        onClick={handleClick}
        className={classNames(
          "flex-1 flex flex-row gap-4 justify-center items-center p-4 text-sm text-gray-400 rounded-lg border-2 border-gray-200 border-dashed hover:shadow-inner transition-all",
          isSelected ? "bg-gray-100" : "hover:bg-gray-100"
        )}
      >
        {isSelected ? (
          <>
            <span className="flex-1 -mr-8">Create your proposal</span>
            <span className="mr-8 rotate-90">
              <CaretUp size={16} weight="bold" />
            </span>
          </>
        ) : (
          <>
            <span>
              <Plus size={16} weight="bold" />
            </span>
            <span>Create New Proposal</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ProposalListNewItem;
