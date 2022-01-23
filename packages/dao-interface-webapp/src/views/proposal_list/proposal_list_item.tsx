import classNames from "classnames";
import { CaretDoubleRight, PencilSimpleLine } from "phosphor-react";
import React, { useCallback } from "react";

import Badge from "../../components/badge";
import { ProposalState } from "../../utils/proposals";

import type Color from "../../components/color";
import type { Proposal } from "../../utils/proposals";

interface BadgeStyle {
  readonly color: Color;
  readonly text: string;
}

const getBadgeStyle = (proposal: Proposal): BadgeStyle => {
  switch (proposal.state) {
    case ProposalState.PENDING:
      return { color: "gray", text: "Pending" };
    case ProposalState.ACTIVE:
      return { color: "green", text: "Active" };
    case ProposalState.CANCELLED:
      return { color: "red", text: "Cancelled" };
    case ProposalState.DEFEATED:
      return { color: "red", text: "Defeated" };
    case ProposalState.SUCCEEDED:
      return { color: "green", text: "Succeeded" };
    case ProposalState.QUEUED:
      return { color: "green", text: "Queued" };
    case ProposalState.EXPIRED:
      return { color: "gray", text: "Expired" };
    case ProposalState.EXECUTED:
      return { color: "green", text: "Executed" };
    default:
      return { color: "gray", text: "Unknown" };
  }
};

interface ProposalListItemProps {
  readonly proposal: Proposal;
  readonly isSelected?: boolean;
  readonly onClick?: (proposal: Proposal) => void;
}

const ProposalListItem: React.FunctionComponent<ProposalListItemProps> = ({
  proposal,
  isSelected = false,
  onClick,
}) => {
  const badgeStyle = getBadgeStyle(proposal);

  const handleClick = useCallback(() => {
    if (typeof onClick === "undefined") return;
    onClick(proposal);
  }, [proposal, onClick]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        "group flex flex-row gap-4 py-2 px-4 w-full text-left text-gray-800",
        isSelected
          ? "bg-gray-100 shadow-inner"
          : "hover:bg-gray-100 hover:shadow-inner"
      )}
    >
      <div
        className={classNames(
          "flex flex-row gap-4 items-center self-center",
          isSelected
            ? "text-gray-400"
            : "text-gray-300 group-hover:text-gray-400"
        )}
      >
        <span className="text-xs font-bold">{proposal.order}</span>
        <PencilSimpleLine size={16} weight="bold" />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="overflow-hidden max-w-sm text-sm font-medium text-ellipsis whitespace-nowrap">
          {proposal.name}
        </h3>
        <p className="overflow-hidden max-w-xs text-xs text-gray-400 text-ellipsis">
          {proposal.id.toHexString()}
        </p>
      </div>
      <div className="flex flex-row gap-4 items-center self-center">
        <Badge color={badgeStyle.color} hasDot>
          {badgeStyle.text}
        </Badge>
        <span
          className={classNames(
            isSelected
              ? "text-gray-400"
              : "text-gray-300 group-hover:text-gray-400"
          )}
        >
          <CaretDoubleRight size={16} weight="bold" />
        </span>
      </div>
    </button>
  );
};

export default ProposalListItem;
