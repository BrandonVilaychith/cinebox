import React from "react";
import Movies from "../Movies";

const Upcoming = () => (
  <Movies
    pageTitle="Upcoming"
    link={`${process.env.REACT_APP_API}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US`}
  />
);

export default Upcoming;
