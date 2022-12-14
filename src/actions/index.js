export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const CLEAR_MOVIES_DETAIL = 'CLEAR_MOVIES_DETAIL'
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE'
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE'


  export function getAll() {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=f42a4829")
    }
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=f42a4829&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }


  export function getMovieDetail(id) {
    if(id)
      return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=f42a4829&i=" + id)
          .then(response => response.json())
          .then(json => {
            dispatch({ type: GET_MOVIE_DETAIL, payload: json });
          });
      };
    return {type: CLEAR_MOVIES_DETAIL }
  }


export function addMovieFavorite(payload) {
    return { 
        type: ADD_MOVIE_FAVORITE, 
        payload
    };
  }


export function removeMovieFavorite(payload) {
    return { 
        type: REMOVE_MOVIE_FAVORITE, 
        payload
    };
  }
  