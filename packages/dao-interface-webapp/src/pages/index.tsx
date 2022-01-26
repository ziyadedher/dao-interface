import { ethers } from "ethers";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

import ContractSearch from "../views/contract_search";

const Index: React.FunctionComponent = () => {
  const router = useRouter();
  const [isValidAddress, setIsValidAddress] = useState<boolean | null>(null);
  const [query, setQuery] = useState("");

  const handleQueryChange = useCallback((newQuery: string) => {
    setQuery(newQuery);
    if (newQuery.length === 0) setIsValidAddress(null);
    else setIsValidAddress(ethers.utils.isAddress(newQuery));
  }, []);

  const handleQuerySubmit = useCallback(async () => {
    if (!ethers.utils.isAddress(query)) return;
    await router.push(`/proposal/${query}`);
  }, [router, query]);

  useEffect(() => {
    if (isValidAddress !== null && isValidAddress)
      router.push(`/proposal/${query}`).then(
        () => {},
        () => {}
      );
  }, [router, query, isValidAddress]);

  return (
    <div className="flex flex-col justify-center items-center p-8 w-full min-h-screen bg-gray-50">
      <div className="container flex flex-col max-w-5xl">
        <div className="flex flex-col gap-16 items-center">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-5xl text-gray-800">DAO Interface</h1>
            <h2 className="text-base text-gray-400">
              Easily interact with DAOs.
            </h2>
          </div>

          <div className="flex flex-col gap-4 items-center w-full">
            <div className="w-1/2">
              <ContractSearch
                query={query}
                onQueryChange={handleQueryChange}
                onQuerySubmit={handleQuerySubmit}
              />
            </div>
            <p className="h-8 text-xs">
              {isValidAddress === null ? null : isValidAddress ? (
                <span className="text-green-600">
                  Looks like a valid address!
                </span>
              ) : (
                <span className="text-red-600">
                  That doesn&apos;t look like a valid address.
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-xl sm:grid-cols-2">
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-gray-800">
                What is this?
              </h3>
              <p className="text-sm text-justify text-gray-700">
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
              <p className="text-sm text-justify text-gray-700">
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
