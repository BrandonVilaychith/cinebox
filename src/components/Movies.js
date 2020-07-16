import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import MovieItem from "./MovieItem";

const Page = styled.div`
  flex-grow: 1;
  margin-top: 70px;
  margin-left: 300px;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 6em;
  margin-bottom: 30px;
  text-shadow: 1px 1px #14181b;
  font-weight: 800;
  letter-spacing: 0.2em;
`;

const Container = styled.div`
  display: grid;
  max-width: 90%;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  grid-gap: 1.5em;
  @media (max-width: 1550px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Movies = ({ link, pageTitle }) => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);

  const apiUrl = `${link}&page=${page}`;

  useEffect(() => {
    async function fetchData() {
      let movies = await axios.get(apiUrl);

      movies = movies.data.results;

      setMovieList(movies);
    }

    fetchData();
  }, [apiUrl]);

  const movies = movieList.map((movie) => (
    <MovieItem key={movie.id} movie={movie} />
  ));

  return (
    <Page>
      <Title>{pageTitle}</Title>
      <Container>{movies}</Container>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </Page>
  );
};

export default Movies;
