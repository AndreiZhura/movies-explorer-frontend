
import './App.css';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Profile from '../auth/Profile/Profile';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/saved-movies" element={<SavedMovies/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signin" element={<Login/>} />
      <Route path="/signup" element={<Register/>} />
      <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </>
  );
}

export default App;
