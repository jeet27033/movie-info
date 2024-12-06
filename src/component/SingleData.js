import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie } from "./redux/saga";

export const SingleData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.myreducer.singleMovie);

  useEffect(() => {
    dispatch(getSingleMovie(id));
  }, [dispatch, id]);

  return (
    <div className="single-movie">
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p>No movie details available.</p>
      )}
    </div>
  );
};
