import { authHeader } from '../helpers';

export const dashboardService = {
  newPage,
  getPages,
  deletePage
}

function newPage(newPageData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPageData)
  };

  return fetch(`/cms-api/new-page`, requestOptions)
      .then(handleResponse)
      .then(newPage => {
        // console.log("finished making new page")
      });
}

function getPages() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/cms-api/get-my-pages`, requestOptions)
      .then(handleResponse)
      .then(pages => {
        // console.log(pages);
        return pages;
      })
}

function deletePage(page) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/cms-api/delete-page/` + page, requestOptions)
      .then(handleResponse)
      .then(deletePage => {
        getPages();
        return;
      })
}

function handleResponse(response) {
    return response.text().then(text => {
      // console.log(response)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
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
