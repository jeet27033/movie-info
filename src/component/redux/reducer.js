import { SET_MOVIES, SET_SINGLE_MOVIE} from "./action";

const initialState = {
  moviedata: [],
  singleMovie: null,
};

export const myreducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_MOVIES:
      return {...state, moviedata: action.payload,};

    case SET_SINGLE_MOVIE:
      return {...state,singleMovie: action.payload,};

    default:
      return state;
  }
};