import React, { createContext, ReactNode, useState } from "react";

interface SearchingContextProps {
  children: ReactNode;
}

export const SearchingContext = createContext("");

const SeachingProvider = ({ children }: SearchingContextProps) => {
  const [search, setSearch] = useState("");

  return (
    <SearchingContext.Provider value={""}>{children}</SearchingContext.Provider>
  );
};

export default SeachingProvider;
