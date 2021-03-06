import React from "react";
import Movies from "../Movies";

const Discover = () => (
  <Movies
    pageTitle="Discover"
    link={`${process.env.REACT_APP_API}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`}
  />
);

export default Discover;
