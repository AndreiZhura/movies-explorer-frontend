export const BASE_URL = 'https://api.andreizhura-diplom.nomoredomains.club';

function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}


//авторизоция
export const register = (email, password, name) => {

  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, name })
  })

    .then((res) => {
      return getResponse(res)
    })
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      return getResponse(res)
    })
};


export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((res) => {
      return getResponse(res)
    })
}

// загрузка информации с сервера

export const userInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const updateUserInfo = ({ email, name }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      name,
    })
  })
    .then((res) => {
      return getResponse(res)
    })
}

export const saveNewCard = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
       country: movie.country || 'Нет данных',
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: (`https://api.nomoreparties.co/${movie.image.url}`),
        trailerLink: movie.trailerLink || 'https://www.youtube.com',
        thumbnail: (`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`),
        movieId: movie.id,
        nameRU: movie.nameRU || 'Нет данных',
        nameEN: movie.nameEN || 'Нет данных'
    })
  })
    .then(this._getResponseData)
}