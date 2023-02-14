
import './App.css';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import { Routes, Route } from 'react-router-dom';
//функционал
import { useState, useEffect } from 'react';
import * as api from "../../components/utils/MainApi";
import * as apiMovie from "../utils/MoviesApi"
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useLocation } from 'react-router-dom';




function App() {

  const [loggedIn, setloggedIn] = useState(false);
  const [infoError, setInfoError] = useState(true);
  // const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  // проверяем авторизован пользователь или нет
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // Фильмы 
  const [movies, setMovie] = useState([]);
  const [savesMovies, setSavesMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [connectingError, setConnectingError] = useState(false);
  const location = useLocation();


  const history = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) return;
    api.userInfo()
      .then((res) => {
        setloggedIn(true);
        history("/movies");
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    setLoading(true)
    apiMovie.MoviesApi()
      .then((result) => {
        setMovie(result);
        setConnectingError(false);
        setLoading(false);
      })
      .catch((err) => {
        setConnectingError(true);
        setLoading(false);
        console.error(err);
      });
    api.UsersMovies()
      .then((result) => {
        setSavesMovies(result.data)
        setConnectingError(false);
        setLoading(false);
      })
      .catch((err) => {
        setConnectingError(true);
        setLoading(false);
        console.error(err);
      });

  }, [isLoggedIn])

  const locationSaves = location.pathname === '/'

  useEffect(() => {
    if (locationSaves) {
      setloggedIn(true);
      api.UsersMovies()
        .then((result) => {
          setSavesMovies(result.data)
          console.log(savesMovies)
          setConnectingError(false);
          setLoading(false);
        })
        .catch((err) => {
          setConnectingError(true);
          setLoading(false);
          console.error(err);
        });
    }
  }, [locationSaves, savesMovies])



  const newAuth = (token) => {
    return api
      .checkToken(token)
      .then((res) => {
        if (res) {
          setisLoggedIn(true);
          setloggedIn(true);
          setCurrentUser(res.data);
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
    api
      .authorize(email, password)
      .then((res) => {
        setloggedIn(true);
        setInfoError(true);
        history("/movies");
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
        setInfoError(false);
      });
  }

  function handleRegistration(email, password, name) {
    api
      .register(email, password, name)
      .then((res) => {
        setInfoError(true);
        history("/signin");

      })
      .catch((err) => {
        console.log(err);
        setInfoError(false);
      });
  }

  function handleUpdateUser(User) {
    /*Редактирование профиля
      Отредактированные данные профиля должны сохраняться на сервере.  */
    api
      .updateUserInfo(User)
      .then((result) => {
        setCurrentUser(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleSaveMovies = (save) => {
    api.saveNewCard(save)
      .then((result) => {

      })
      .catch((err) => {
        console.error(err);
      });

  }

  const handleDeleteMovies = (saves) => {
    api.DeleteUsers(saves)
      .then((result) => {

      })
      .catch((err) => {
        console.error(err);
      });
  }

  function signOut() {
    localStorage.removeItem('token');
    history.push('/signup');
    setisLoggedIn(false);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={
            <Main
              loggedIn={loggedIn}
            />} />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                movies={movies}
                loading={loading}
                connectingError={connectingError}
                isSavesMovies={false}
                onMovieLike={handleSaveMovies}
                savesMovies={savesMovies}
                onCardDelete={handleDeleteMovies}
              />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Movies
                movies={movies}
                loading={loading}
                connectingError={connectingError}
                isSavesMovies={true}
                savesMovies={savesMovies}
              />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                signOut={signOut}
                handleUpdateUser={handleUpdateUser}
              />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={<Login
            handleLogin={handleLogin}
            infoError={infoError}
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
