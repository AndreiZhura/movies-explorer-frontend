
import './App.css';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes } from 'react-router-dom';
import { Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from '../../utils/MainApi';
import * as auth from "../../utils/auth";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "./ProtectedRoute";


function App() {


  const [userData, setUserData] = useState({});
  const [loggedIn, setloggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  // проверяем авторизован пользователь или нет
  const [isLoggedIn, setisLoggedIn] = useState(false);
 



  const newAuth = (token) => {

    return auth
      .checkToken(token)
      .then((res) => {
        if (res) {
          setisLoggedIn(true);
          setloggedIn(true);
          setUserEmail(res.data.email);
          setUserData({
            username: res.username,
            email: res.email,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    api
      .downLoadingUserInformationFromServer()
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    api
      .downloadingCardsFromServer()
      .then((result) => {
        setCards(result.data);
      })
      .catch((err) => {
        console.error(err);
      });

  }, [isLoggedIn]);

  return (
    <>
     <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <ProtectedRoute
          path="/profile"
          loggedIn={loggedIn}
          component={Profile}
        />
         <ProtectedRoute
          path="/movies"
          loggedIn={loggedIn}
          component={Movies}
        />
         <ProtectedRoute
          path="/saved-movies"
          loggedIn={loggedIn}
          component={SavedMovies}
        />
      </Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />

        </CurrentUserContext.Provider>
    </>
  );
}

export default App;
