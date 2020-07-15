import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Rating from "./Rating";

const DiscoverPage = styled.div`
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

const Overlay = styled.div`
  transition: 0.5s ease;
`;

const Movie = styled.div`
  border: 1px solid red;
  width: 100%;
  position: relative;

  ${Overlay} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    color: #fff;
  }
  &:hover ${Overlay} {
    display: block;
    transition: 2s ease-in-out;
    background: rgba(0, 0, 0, 0.8);
  }
  /* background: black; */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  cursor: pointer;
`;

// const MovieInfo = styled.div`
//   border: 1px solid red;
//   display: flex;
//   flex-direction: column;
//   height: 50px;
// `;

const Discover = () => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let movies = await axios.get(
        `${process.env.REACT_APP_API}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );

      movies = movies.data.results;

      setMovieList(movies);
    }
    fetchData();
  }, [page, setMovieList]);

  const movies = movieList.map((movie) => {
    return (
      <Overlay>
        <Movie key={movie.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={`${movie.title}`}
          />
          <Overlay>
            <h1>Hello</h1>
          </Overlay>
          {/* <MovieInfo>
          <h2>{movie.title}</h2>
          <Rating voteAverage={Math.round(movie.vote_average)} />
        </MovieInfo> */}
        </Movie>
      </Overlay>
    );
  });

  return (
    <DiscoverPage>
      <Title>Discover</Title>
      <Container>{movies}</Container>
      <button onClick={() => setPage(page + 1)}>next</button>
    </DiscoverPage>
  );
};

export default Discover;
