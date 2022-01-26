import SearchBar from "../../src/components/search_bar";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Search Bar",
  component: SearchBar,
};

interface SearchBarStoryProps {
  readonly placeholder: string;
  readonly query: string;
}

const SearchBarStory: Story<SearchBarStoryProps> = ({
  placeholder,
  query,
}: SearchBarStoryProps) => (
  <SearchBar placeholder={placeholder} query={query} />
);
SearchBarStory.storyName = "Search Bar";
SearchBarStory.args = {
  placeholder: "Search",
  query: "",
};

export default META;
export { SearchBarStory };
