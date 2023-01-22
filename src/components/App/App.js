
import './App.css';
//import Login from '../auth/Login/Login';
//import Register from '../auth/Register/Register';
import Header from '../common/Header/Header';
//import Profile from '../auth/Profile/Profile';
//import Main from '../Main/Main';
//import Footer from '../common/Footer/Footer';
//import SearchForm from '../Movies/SearchForm/SearchForm';
//import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';


function App() {
  return (
    <>
    <Header/>
      <Movies/>
    </>
  );
}

export default App;
