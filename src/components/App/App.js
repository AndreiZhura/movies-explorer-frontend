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
import { Route, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ApiMovies from '../../utils/MoviesApi';
import * as auth from "../../utils/auth";

function App() {

  const [loggedIn, setloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [infoPopup, setInfoPopup] = useState(false);
  const [isOpenInfoPopup, setisOpenInfoPopup] = useState(false);
  const history = useNavigate();


  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        setisLoggedIn(true);
        setloggedIn(true);
        setUserEmail(email);
        history.push("/");
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      newAuth(token);
    }
  }, []);

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
    }
  }, [loggedIn]);


  function handleRegistration(email, password) {
    auth
      .register(email, password)
      .then((res) => {
        if (res.statusCode !== 400) {
          setInfoPopup(true);
          setisOpenInfoPopup(true);

          history.push("/sign-in");
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoPopup(false);
        setisOpenInfoPopup(true);
      });
  }

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
    ApiMovies.AllMovies()
      .then((result) => {
        setMovies(result)
        console.log(result.id)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);



  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute>
              <Movies
                movies={movies}
              />
            </ProtectedRoute>

          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute>
              <SavedMovies />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={<Login
            handleLogin={handleLogin}
          />} />
          <Route path="/signup" element={<Register
            handleRegistration={handleRegistration}
          />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;