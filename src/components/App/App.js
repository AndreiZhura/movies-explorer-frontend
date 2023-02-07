
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



function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={
          <ProtectedRoute loggedIn={true}>
            <Movies />
          </ProtectedRoute>
        } />
        <Route path="/saved-movies" element={
          <ProtectedRoute loggedIn={false}>
            <SavedMovies isSavesMovies={true} />
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute loggedIn={true}>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
