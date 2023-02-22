
import './App.css';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import { Routes, Route } from 'react-router-dom';
//функционал
import { useState, useEffect } from 'react';
import * as api from "../../components/utils/MainApi";
import * as apiMovie from "../utils/MoviesApi"
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {

  const [loggedIn, setloggedIn] = useState(false);

  const [nameError, setNameError] = useState(true);
  const [EmailError, setEmailError] = useState(true);
  const [PasswordError, setPasswordError] = useState(true);
  const [buttonError, setButtonError] = useState(true);
  // const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  // проверяем авторизован пользователь или нет
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // Фильмы 
  const [movies, setMovie] = useState([]);
  const [savesMovies, setSavesMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [connectingError, setConnectingError] = useState(false);
  const [registerError, setRegisterError] = useState(true)
  const [redisterMessage, setRegisterMessage] = useState('')
  const [loginError, setLoginError] = useState(true)
  const [loginMessage, setLoginMessage] = useState('');
  const [errorEmailUpdate, setErrorEmailUpdate] = useState(true)
  const [errorUpdateUser, setErrorUpdateUser] = useState('');
  const [successfulUpdateProfile, setSuccessfulUpdateProfile] = useState(false);
  const [successfulUpdateProfileText, setSuccessfulUpdateProfileText] = useState('');
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);
  const [successfulRegistrationText, setSuccessfulRegistrationText] = useState('');

  const history = useNavigate();

  function moviesInform() {
    setLoading(true);
    apiMovie.MoviesApi()
      .then((result) => {
        setMovie(result);
        setConnectingError(false);
      })
      .catch((err) => {
        setConnectingError(true);
        setLoading(false);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setLoading(true);
    api.UsersMovies()
      .then((result) => {
        setSavesMovies(result.data);
        setConnectingError(false);
      })
      .catch((err) => {
        setConnectingError(true);
        setLoading(false);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function userInformation() {
    api.userInfo()
      .then((res) => {
        setloggedIn(true);
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.error(err);

      });
  }

  useEffect(() => {
    if (!isLoggedIn) return;
    userInformation()
    moviesInform();
  }, [isLoggedIn])


  const newAuth = (token) => {
    return api
      .checkToken(token)
      .then((res) => {
        if (res) {
          setisLoggedIn(true);
          setloggedIn(true);
          setCurrentUser(res.data);
          moviesInform();
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
        setEmailError(true);
        setPasswordError(true);
        setButtonError(true);
        history("/movies");
        localStorage.setItem("token", res.token);
        userInformation()
        moviesInform();
      })
      .catch((err) => {
        console.log(err);
        setEmailError(false);
        setPasswordError(false);
        setButtonError(false);
        setLoginError(false);
        setLoginMessage(err)
      });
 
  }

  function handleRegistration(email, password, name) {
    const dataEmail = email;
    const dataPassword = password;
    api
      .register(email, password, name)
      .then((email, password, name) => {
        setSuccessfulRegistration(true);
        setSuccessfulRegistrationText(`Пользователь: ${dataEmail}, зарегестрирован успешно `)
        if(successfulRegistration){
          handleLogin(dataEmail,dataPassword)
        }
        setNameError(true);
        setEmailError(true);
        setPasswordError(true);
        setSuccessfulRegistration(false);
      })
      .catch((err) => {
        console.log(err);
        setNameError(false);
        setEmailError(false);
        setPasswordError(false);
        setRegisterError(false)
        setRegisterMessage(err)
      });
  }

  function handleUpdateUser(User) {
    /*Редактирование профиля
      Отредактированные данные профиля должны сохраняться на сервере.  */
    api
      .updateUserInfo(User)
      .then((result) => {
        setCurrentUser(result.data);
        setErrorEmailUpdate(true);
        setSuccessfulUpdateProfile(false)
        setSuccessfulUpdateProfileText('Данные пользователя успешно изменены!')
      })
      .catch((err) => {
        console.error(err);
        setErrorEmailUpdate(false)
        setSuccessfulUpdateProfile(true)
        setErrorUpdateUser('Данный Email уже занят!')
      });
  }


  const handleSaveMovies = (save) => {
    api.saveNewCard(save)
      .then((result) => {
        setSavesMovies([...savesMovies, result.data])
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handlrDeleteMovies = (del) => {
    const numberValidator = str => /^\d+$/.test(str);

    if (numberValidator(del.id)) {
      savesMovies.filter((res) => {
        if (res.movieId === del.id) {
          return api.DeleteMovies(res._id)
            .then((result) => {
              setSavesMovies(savesMovies.filter((res) => { return res._id !== result._id }))
            })
            .catch((err) => {
              console.error(err);
            });
        }
      })
    }
    else {
      api.DeleteMovies(del)
        .then((result) => {
          setSavesMovies(savesMovies.filter((res) => { return res._id !== result._id }))
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }


  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('search');
    localStorage.removeItem('shortORlong');
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
                onMovieDisLike={handlrDeleteMovies}
                savesMovies={savesMovies}
              />
            </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies
                savesMovies={savesMovies}
                onMovieDisLike={handlrDeleteMovies}
                loading={loading}
                connectingError={connectingError}
              />
            </ProtectedRoute>
          } />

          <Route path="/profile" element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile
                signOut={signOut}
                handleUpdateUser={handleUpdateUser}
                errorEmailUpdate={errorEmailUpdate}
                errorUpdateUser={errorUpdateUser}
                successfulUpdateProfile={successfulUpdateProfile}
                successfulUpdateProfileText={successfulUpdateProfileText}
              />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={<Login
            handleLogin={handleLogin}
            EmailError={EmailError}
            PasswordError={PasswordError}
            buttonError={buttonError}
            loginError={loginError}
            loginMessage={loginMessage}
          />} />
          <Route path="/signup" element={<Register
            handleRegistration={handleRegistration}
            successfulRegistration = {successfulRegistration}
            successfulRegistrationText = {successfulRegistrationText}
            nameError={nameError}
            EmailError={EmailError}
            PasswordError={PasswordError}
            registerError={registerError}
            redisterMessage={redisterMessage}
          />} />
          <Route path="*" element={
            <PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
