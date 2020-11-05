import {actGetAllMovies} from './actions'
import axios from "axios";

export default function reducer(state = [], action) {

  if(action.type === "GET_ALL_MOVIES"){
    return [
        ...state,
        action.payload,
    ]
  }

  if (action.type === "ADD_MOVIES") {
    return [
      ...state,
      {
        uid: action.payload.uid,
        name: action.payload.title,
        genre: action.payload.genre,
        dateReleased: action.payload.dateReleased,
      },
    ];
  } 
  else if (action.type === "DELETE_MOVIES") {
    return state.filter((movies) => movies.uid != action.payload.uid);
  } 
  else if (action.type === "EDIT_MOVIES") {
    return state.map((movies) =>
      movies.uid !== action.payload.uid
        ? movies
        : {
            ...movies,
            name: action.payload.title,
            genre: action.payload.genre,
            dateReleased: action.payload.dateReleased,
          }
    );
  } else return state;
}


// export async function fetchAllMovies(){

//     const movieData = await fetch("https://moviewr.herokuapp.com/getall",{method: 'GET',})
//     const reducerData = await movieData.json()
//     console.log(actGetAllMovies(reducerData))
    
     
// }

// export async function fetchAllMovies(dispatch, getState) {
//     return dispatch => {
//         const response = fetch("https://moviewr.herokuapp.com/getall",{method: 'GET',}).then(res => {
//             res.json().then(resp => {
//                 dispatch(actGetAllMovies(resp))
//             })
//         })
//     }
    
    
// }

export function fetchAllMovies(){
    return(dispatch)=>{
        return axios.get("https://moviewr.herokuapp.com/getall").then((response)=>{
            dispatch(actGetAllMovies(response.data));
        })
    }
}
