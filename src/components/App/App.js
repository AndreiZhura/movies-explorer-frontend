
import './App.css';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import { Routes, Route } from 'react-router-dom';
//функционал
import { useState, useEffect } from 'react';
import * as auth from "../../components/utils/MainApi";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";



function App() {

  const [loggedIn, setloggedIn] = useState(false);
  const [infoError, setInfoError] = useState(true);
 // const [userData, setUserData] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const history = useNavigate();


  const newAuth = (token) => {
    return auth
      .checkToken(token)
      .then((res) => {
        if (res) {
          setloggedIn(true);
          console.log(res.data)
          setCurrentUser(res.data)
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
        setInfoError(true);
        history("/profile");
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
        setInfoError(false);
      });
  }

  function handleRegistration(email, password, name) {
    auth
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
        <Route path="/movies" element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Movies />
          </ProtectedRoute>
        } />
        <Route path="/saved-movies" element={
          <ProtectedRoute loggedIn={loggedIn}>
            <SavedMovies isSavesMovies={true} />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Profile />
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
