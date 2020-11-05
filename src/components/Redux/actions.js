const GET_ALL_MOVIES = "GET_ALL_MOVIES";
const ADD_MOVIES = "ADD_MOVIES";
const DELETE_MOVIES = "DELETE_MOVIES";
const EDIT_MOVIES = "EDIT_MOVIES"

const actAddMovies = (data) => {
    return {
        type : ADD_MOVIES,
        payload : data,
    }
}


const actDeleteMovies = (data) => {
    return {
        type : DELETE_MOVIES,
        payload : data,
    }
}


const actEditMovies = (data) => {
    return {
        type : EDIT_MOVIES,
        payload : data,
    }
}

const actGetAllMovies = (data) => {
    return {
        type : GET_ALL_MOVIES,
        payload : data,
    }
}

export {actAddMovies,actDeleteMovies,actEditMovies,actGetAllMovies}