import React, { createContext, ReactNode, useState } from "react";

interface SearchingContextProps {
  children: ReactNode;
}

interface passedProps {}

interface IContextProps {
  getSearch?: () => void;
  searching?: (data: string) => void;
  dispatch?: ({ type }: { type: string }) => void;
}

export const SearchingContext = createContext({} as IContextProps);

const SeachingProvider = ({ children }: SearchingContextProps) => {
  const [search, setSearch] = useState("");

  function getSearch() {
    console.log("action");
  }

  return (
    <SearchingContext.Provider value={}>{children}</SearchingContext.Provider>
  );
};

export default SeachingProvider;
