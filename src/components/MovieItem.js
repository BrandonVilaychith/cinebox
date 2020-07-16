import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Movie = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 100%;
  /* border: 1px solid purple; */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    display: block;
    color: #fff;
    transition: opacity 0.2s ease-in;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      /* border: 1px solid green; */
    }
    .info {
      /* align-self: flex-end; */
      /* border: 1px solid red; */
      /* height: 100%; */
      display: flex;
      justify-content: space-between;
      font-size: 1.5em;
      margin: 0 0.3em 0.2em 0.3em;
    }
  }
  &:hover .overlay {
    display: block;
    opacity: 1;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &:hover .info {
    /* display: flex; */
  }
`;

const Title = styled.h2`
  margin-top: 0.4em;
  text-align: center;
  font-size: 1.5em;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  cursor: pointer;
`;

const MovieItem = ({ movie }) => {
  const release_year = movie.release_date.split("-")[0];

  return (
    <Link to={`/${movie.id}`}>
      <Movie key={movie.id}>
        <Image
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={`${movie.title}`}
        />
        <div className="overlay">
          <Title>{movie.title}</Title>
          <div className="info">
            <p>
              {movie.vote_average}{" "}
              <i className="fa fa-star" aria-hidden="true"></i>
            </p>
            <p>{release_year}</p>
          </div>
        </div>
      </Movie>
    </Link>
  );
};
/*
  vote_average
  release_date

*/
export default MovieItem;
