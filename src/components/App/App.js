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
import { Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ProtectedRoute from '../ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import ApiMovies from '../../utils/MoviesApi';
import api from '../../utils/MainApi'
import * as auth from "../../utils/auth";

function App() {


  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [ infoError, setInfoError ] = useState(false);

  const history = useNavigate();

  // теперь карточки и вся информация о юзере загружаются если  isLoggedIn === true
  useEffect(() => {
    if (!isLoggedIn) return;
    api
      .downLoadingUserInformationFromServer()
      .then((res) => {
        setCurrentUser(res);
        setUserData(res);
        setisLoggedIn(true)
      })
      .catch((err) => {
        console.error(err);
      });

    /* api
       .downloadingCardsFromServer()
       .then((result) => {
         setCards(result.data);
       })
       .catch((err) => {
         console.error(err);
       });*/

  }, [isLoggedIn]);

  const newAuth = (token) => {
    return auth
      .checkToken(token)
      .then((res) => {
        if (res) {
          setisLoggedIn(true);
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

  useEffect(() => {
    if (isLoggedIn) {
      history("/");
    }
  }, [isLoggedIn]);

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((res) => {
        setisLoggedIn(true);
        history("/profile");
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err.message);
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


  /*
    useEffect(() => {
      ApiMovies.AllMovies()
        .then((result) => {
          setMovies(result)
          console.log(result.id)
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);*/
  function signOut() {
    localStorage.removeItem('token');
    history.push('/signup');
    setisLoggedIn(false);
  }


  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Movies
                movies={movies}
              />
            </ProtectedRoute>

          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedMovies />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile
                userData={userData}
                signOut={signOut}
                handleProfile={newAuth}
              />
            </ProtectedRoute>
          } />
          <Route path="/signin" element={<Login
            handleLogin={handleLogin}
          />} />
          <Route path="/signup" element={<Register
            handleRegistration={handleRegistration}
            infoError = {infoError}
          />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;