import './App.css';
import { useState } from 'react';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';

function App() {

  const [loggedIn, setloggedIn] = useState(false);

  function test(){
    setloggedIn(true);
  }

  return (
    <>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/movies" element={
      <ProtectedRoute loggedIn = {true}>
        <Movies/>
      </ProtectedRoute>
      } />
      <Route path="/saved-movies" element={
        <ProtectedRoute>
          <SavedMovies/>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>
      } />
      <Route path="/signin" element={<Login/>} />
      <Route path="/signup" element={<Register/>} />
      <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;