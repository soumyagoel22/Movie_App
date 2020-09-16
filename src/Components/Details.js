import React from "react";

const Details = ({ state, displayData }) => {
  return (
    <div className="disp">
      <h3>
        {state.title} {displayData.original_title}
      </h3>
      <h5>
        {state.rated} {displayData.vote_average}
      </h5>
      <h5>
        {state.releasedOn} {displayData.release_date}
      </h5>
      <p>{displayData.overview}</p>
    </div>
  );
};

export default Details;
