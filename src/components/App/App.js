import './App.css';
import { useState, useEffect } from 'react';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes } from 'react-router-dom';
import { Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ApiMovies from '../../utils/MoviesApi';
import api from '../../utils/MainApi'
import * as auth from "../../utils/auth";

function App() {


  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState({});
  const [loggedIn, setloggedIn] = useState(false);
  const [infoError, setInfoError] = useState(false);

  const history = useNavigate();

  // теперь карточки и вся информация о юзере загружаются если  loggedIn === true
  useEffect(() => {
    if (!loggedIn) return;
    api
      .downLoadingUserInformationFromServer()
      .then((res) => {
        setCurrentUser(res);
        setUserData(res);
        setloggedIn(true)
      })
      .catch((err) => {
        console.error(err);
      });
    ApiMovies.AllMovies()
      .then((result) => {
        setMovies(result)
        console.log(result)
      })
      .catch((err) => {
        console.error(err);
      });

  }, [loggedIn]);

  const newAuth = (token) => {
    return auth
      .checkToken(token)
      .then((res) => {
        if (res) {
          setloggedIn(true);
          setUserData(res);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      newAuth(token);
    }
  }, []);


  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        setloggedIn(true);
        history("/profile");
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegistration(email, password, name) {
    auth
      .register(email, password, name)
      .then((res) => {

        setInfoError(false);
        history("/signin");

      })
      .catch((err) => {
        console.log(err);
        setInfoError(true);
      });
  }



  function signOut() {
    localStorage.removeItem('token');
    history.push('/signup');
    setloggedIn(false);
  }


  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<Movies
            movies={movies}
          />} />
          <Route path="/saved-movies" element={<SavedMovies
           movies={movies}
          />} />
          <Route path="/profile" element={<Profile
            userData={userData}
            signOut={signOut}
            handleProfile={newAuth}
          />} />
          <Route path="/signin" element={<Login
            handleLogin={handleLogin}
          />} />
          <Route path="/signup" element={<Register
            handleRegistration={handleRegistration}
            infoError={infoError}
          />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;