import { authHeader } from '../helpers';
// const dotenv = require('dotenv')

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
};

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    // return fetch(`${config.apiUrl}/user-login`, requestOptions)
    return fetch(`/cms-api/user-login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/get-users`, requestOptions).then(handleResponse);
    return fetch(`/cms-api/get-users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/get-user/${id}`, requestOptions).then(handleResponse);
    return fetch(`/cms-api/get-user/${id}`, requestOptions).then(handleResponse);
}

function register(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(username, password)
    };

    return fetch('/cms-api/register', requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    // return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
    return fetch(`/cms-api/users/${user.id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    // console.log(response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        else if(data.success === false) {
          console.log("sucess is false")
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        else {
          return data;
        }
    });
}
