import React, { useState } from "react";

const Rating = ({ voteAverage }) => (
  <div>
    {Array.from(Array(voteAverage), (element, idx) => {
      return <span key={idx} className="fa fa-star checked"></span>;
    })}
    {Array.from(Array(10 - voteAverage), (element, idx) => {
      return <span key={idx} className="fa fa-star"></span>;
    })}
  </div>
);

//   <div>
//
//
//     <span class="fa fa-star checked"></span>
//     <span class="fa fa-star"></span>
//
//   </div>

export default Rating;
