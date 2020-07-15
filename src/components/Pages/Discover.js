import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import styled from "styled-components";

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

const Movie = styled.div`
  border: 1px solid red;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

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
      <Movie key={movie.id}>
        <Image
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      </Movie>
    );
  });

  return (
    <DiscoverPage>
      <Title>Discover</Title>
      <Container>{movies}</Container>
      <button onClick={(e) => setPage(page + 1)}>next</button>
    </DiscoverPage>
  );
};

export default Discover;
