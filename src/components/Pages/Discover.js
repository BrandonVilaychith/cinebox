import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const Discover = () => {
  const [page, setPage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let movies = await axios.get(
        `${process.env.REACT_APP_API}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );

      movies = movies.data.results;

      const half_len = Math.ceil(movies.length / 2);
      const left = movies.slice(0, half_len);
      const right = movies.slice(half_len, movies);

      setMovieList(left);
      setTemp(right);
    }
    fetchData();
  }, [page, setMovieList]);

  const onClick = (e) => {
    e.preventDefault();
    if (temp.length > 0) {
      setMovieList(temp);
      setTemp([]);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="discover-page">
      <h1 className="discover-title">Discover</h1>
      <div className="discover-movie-container">
        {movieList.map((movie) => (
          <div>
            <div className="movie-image" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={`${movie.title}`}
              />
            </div>
          </div>
        ))}
        {/* <InfiniteScroll
          dataLength={movieList.length}
          next={onClick}
          hasMore={true}
          loader={<h4>Loading....</h4>}
          className="infin"
        >
          <div className="movie-list-container">
            {movieList.map((movie) => (
              <div className="movie-image" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                  alt={`${movie.title}`}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll> */}
      </div>
      <button onClick={(e) => onClick(e)}>next</button>
    </div>
  );
};

export default Discover;
