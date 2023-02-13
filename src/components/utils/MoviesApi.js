export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function getResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}



export const MoviesApi = () => {

  return fetch(`${BASE_URL}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })

    .then((res) => {
      return getResponse(res)
    })
}