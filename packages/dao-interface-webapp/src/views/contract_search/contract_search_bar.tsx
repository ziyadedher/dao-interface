import React from "react";

import SearchBar from "../../components/search_bar";

interface ContractSearchBarProps {
  readonly query: string;
  readonly onQueryChange?: (query: string) => void;
  readonly onQuerySubmit?: () => void;
}

const ContractSearchBar: React.FunctionComponent<ContractSearchBarProps> = ({
  query,
  onQueryChange: handleQueryChange,
  onQuerySubmit: handleQuerySubmit,
}) => (
  <SearchBar
    placeholder="Search for a contract"
    query={query}
    onQueryChange={handleQueryChange}
    onQuerySubmit={handleQuerySubmit}
  />
);

export default ContractSearchBar;
