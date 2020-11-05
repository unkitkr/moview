import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import {App} from './components/App'
import store from "./components/Redux/Store"
import {actAddMovies,actDeleteMovies,actEditMovies,actGetAllMovies}from './components/Redux/actions'
import {fetchAllMovies} from './components/Redux/reducer'

// store.dispatch(actAddMovies({uid: "14851685-sd4sd",
//      title:"Nasdasd",
//     genre:"Test",
//     dateReleased: "Somedat"}))
// store.dispatch(fetchAllMovies)
// store.dispatch({
//   type : "moviesAdded",
//   payload: {
//     uid: "14851685-sd4sd",
//     title:"Nasdasd",
//     genre:"Test",
//     dateReleased: "Somedat"
//   }
// })
// store.dispatch({
//   type : "moviesAdded",
//   payload: {
//     uid: "148516d4sd",
//     title:"Nasdasd",
//     genre:"Test",
//     dateReleased: "Somedat"
//   }
// })
// store.dispatch({
//   type : "moviesAdded",
//   payload: {
//     uid: "148",
//     title:"Na",
//     genre:"Test",
//     dateReleased: "Somedat"
//   }
// })
// store.dispatch({
//   type : "moviesAdded",
//   payload: {
//     uid: "14851685ddf-sd4sd",
//     title:"sd",
//     genre:"Test",
//     dateReleased: "Somedat"
//   }
// })

// store.dispatch({
//   type : "moviesDeleted",
//   payload: {
//     uid: "14851685ddf-sd4sd",
//   }
// })

// store.dispatch({
//   type : "moviesEdited",
//   payload: {
//     uid: "148",
//     title:"Ka",
//     genre:"Test",
//     dateReleased: "Somedat"
//   }
// })






console.log(store.getState());




ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


