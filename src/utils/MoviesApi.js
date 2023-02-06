class ApiMovies {
    constructor(options) {
        this._url = options.url;
    }

    /*1. Загрузка информации о пользователе с сервера
    Информация о пользователе должна подгружаться с сервера.
     Чтобы осуществить это, сделайте GET-запрос на URL (cohortId замените на идентификатор вашей группы):*/
    AllMovies() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(this._getResponseData)

    }
    _getResponseData(res) {

        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

}

const api = new ApiMovies({
    url: 'https://api.nomoreparties.co/beatfilm-movies',
})

export default api