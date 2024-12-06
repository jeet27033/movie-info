import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {GET_MOVIES,GET_SINGLE_MOVIE,SET_MOVIES,SET_SINGLE_MOVIE} from "./action"

export const getMovies = () => ({ type: GET_MOVIES });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });

const api_key = process.env.REACT_APP_TMDB_API_KEY;

console.log(api_key);

export const getSingleMovie = (id) => ({ type: GET_SINGLE_MOVIE, payload: id });
export const setSingleMovie = (movie) => ({ type: SET_SINGLE_MOVIE, payload: movie });


const fetchMoviesFromApi = async () => {
  const totalPages = 50; 
  const randPage = Math.floor(Math.random() * totalPages) + 1; 
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=${randPage}`);
  const data = await response.json();
  return data.results; 
};

const fetchSingleData = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
  const mydata = await response.json();
  return mydata;
};

function* fetchMoviesSaga() {
    const movies = yield call(fetchMoviesFromApi);
    yield put(setMovies(movies)); 

}

function* fetchMovieSingleSaga(action) { 
    const movie = yield call(fetchSingleData, action.payload);
    yield put(setSingleMovie(movie));
}
  

export function* watchFetchMovies() {
  yield takeEvery(GET_MOVIES, fetchMoviesSaga);
}

export function* watchSingleFetchMovie() {
  yield takeLatest(GET_SINGLE_MOVIE, fetchMovieSingleSaga); 
}