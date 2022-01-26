import React, { useCallback } from "react";

interface ProposalPaneNewProps {
  readonly onClose?: () => void;
}

const ProposalPaneNew: React.FunctionComponent<ProposalPaneNewProps> = ({
  onClose,
}) => {
  const handleClosePress: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      if (typeof onClose === "undefined") return;
      onClose();
    }, [onClose]);
  const handleSubmitPress: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {}, []);

  return <p>Hello, world!</p>;
};

export default ProposalPaneNew;
