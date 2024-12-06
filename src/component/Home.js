import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "./redux/saga";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const moviedata = useSelector((state) => state.myreducer.moviedata);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleNav = (id) => {
    navigate(`/singledata/${id}`); 
  };

  return (
    <div className="movies-container">
      {moviedata.length > 0 ? (
        moviedata.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
              onClick={() => handleNav(movie.id)} 
            />
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};
