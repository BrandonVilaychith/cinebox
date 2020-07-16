import React from "react";
import Movies from "../Movies";

const Playing = () => (
  <Movies
    pageTitle="Playing"
    link={`${process.env.REACT_APP_API}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US`}
  />
);

export default Playing;
