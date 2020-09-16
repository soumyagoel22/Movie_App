import React, { useState } from "react";
import fetchData from "../FetchData";
import Listing from "./Listing";
import "./App.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState({});

  const onSearch = () => {
    if (!search) return;
    fetchData({ search, setSearchData });
  };

  return (
    <>
      <div className="text">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => onSearch()}>Search</button>
      </div>
      {searchData && searchData.length > 0 && (
        <Listing searchData={searchData} />
      )}
    </>
  );
};

export default Search;
