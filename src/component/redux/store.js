import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { myreducer } from "./reducer"; 
import { watchFetchMovies, watchSingleFetchMovie } from "./saga"; 
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    myreducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});


sagaMiddleware.run(watchFetchMovies);
sagaMiddleware.run(watchSingleFetchMovie);