import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

import ContractSearch from "../views/contract_search";

const Index: React.FunctionComponent = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const handleQuerySubmit = useCallback(async () => {
    await router.push(`/proposal/${query}`);
  }, [router, query]);

  return (
    <div className="flex flex-col justify-center items-center p-8 w-full min-h-screen bg-gray-50">
      <div className="container flex flex-col max-w-3xl">
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl text-gray-800">DAO Interface</h1>
            <h2 className="text-sm text-gray-400">
              Search for a DAO contract to get started.
            </h2>
          </div>

          <div className="w-1/2">
            <ContractSearch
              query={query}
              onQueryChange={handleQueryChange}
              onQuerySubmit={handleQuerySubmit}
            />
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-xl sm:grid-cols-2">
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-gray-800">What is this?</h3>
              <p className="text-xs text-justify text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                rerum nesciunt incidunt minus delectus maxime sequi sapiente
                soluta perspiciatis repellendus eaque quae dolorum possimus
                nostrum quisquam, commodi ipsum earum laboriosam!
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-bold text-gray-800">
                How do I use it?
              </h3>
              <p className="text-xs text-justify text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                rerum nesciunt incidunt minus delectus maxime sequi sapiente
                soluta perspiciatis repellendus eaque quae dolorum possimus
                nostrum quisquam, commodi ipsum earum laboriosam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
