import { authHeader } from '../helpers';

export const dashboardService = {
  newPage,
  getPages,
  deletePage
}

function newPage(newPageData) {
  console.log(newPageData);
  console.log(JSON.stringify(newPageData))
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPageData)
  };

  return fetch(`/api/new-page`, requestOptions).then(handleResponse);
}

function getPages() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/api/get-my-pages`, requestOptions)
      .then(handleResponse)
      .then(pages => {
        return pages;
      })
}

function deletePage(page) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/api/delete-page/{page}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
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
