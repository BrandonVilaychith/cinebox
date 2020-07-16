import React from "react";
import Movies from "../Movies";

const Popular = () => (
  <Movies
    pageTitle="Popular"
    link={`${process.env.REACT_APP_API}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}
  />
);

export default Popular;
