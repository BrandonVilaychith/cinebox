import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Page = styled.div`
  flex-grow: 1;
  margin-top: 70px;
  margin-left: 300px;
  border: 1px solid red;
  display: grid;
`;

const Movie = ({
  match: {
    params: { id },
  },
}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const movieData = await axios.get(
          `${process.env.REACT_APP_API}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setMovie(movieData.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  console.log(movie);

  if (!movie) return <h1>Loading...</h1>;

  return <Page></Page>;
};

export default Movie;
