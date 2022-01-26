import { MagnifyingGlass } from "phosphor-react";
import React, { useCallback } from "react";

interface SearchBarProps {
  readonly placeholder: string;
  readonly query: string;
  readonly onQueryChange?: (query: string) => void;
  readonly onQuerySubmit?: () => void;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  placeholder,
  query,
  onQueryChange,
  onQuerySubmit,
}) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (typeof onQueryChange === "undefined") return;
      onQueryChange(e.target.value);
    },
    [onQueryChange]
  );

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (typeof onQuerySubmit === "undefined") return;
        if (e.key === "Enter") onQuerySubmit();
      },
      [onQuerySubmit]
    );

  return (
    <div className="group flex relative flex-row items-center transition-all">
      <span className="absolute left-2 text-gray-400 group-focus-within:text-blue-400">
        <MagnifyingGlass size={16} weight="bold" />
      </span>
      <input
        type="search"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="py-2 px-4 pl-8 w-full text-base text-gray-700 rounded-md border border-gray-200 focus:border-blue-400 outline-none shadow-sm transition-all"
      />
    </div>
  );
};

export default SearchBar;
