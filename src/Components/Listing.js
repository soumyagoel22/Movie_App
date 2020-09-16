import React, { useState } from "react";
import Details from "./Details";

const Listing = ({ searchData }) => {
  const [displayData, setDisplayData] = useState({});
  const [state,setState] = useState({title:"", rated:"", releasedOn:""})

  const onList = (index) => {
    setDisplayData(searchData[index]);
    setState({title:"Title: ", rated:"Rated: ", releasedOn:"Released On: "})
  };

  console.log("searchData", searchData);
  return (
    <div className="div">
      <div className="list">
        {searchData.map(
          (
            { original_title, vote_average, release_date, overview, id },
            index
          ) => (
            <div key={index}>
              <button key={id} className="but" onClick={() => onList(index)}>
                <div>Title: {original_title}</div>
                <div>Rated: {vote_average}</div>
                <div>Released On: {release_date}</div>
                <div>{overview.substring(0, 50) + "..."}</div>
              </button>
            </div>
          )
        )}
      </div>
      <Details state={state} displayData={displayData} />
    </div>
  );
};

export default Listing;
