import { authHeader } from '../helpers';

export const browseSiteService = {
  getFeaturedPages,
  getAllPages,
}

function getFeaturedPages() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/cms-api/get-featured-pages`, requestOptions)
    .then(handleResponse)
    .then(pages => {
      console.log(pages);
      return pages;
    }
  );
}

function getAllPages() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/cms-api/get-all-pages`, requestOptions)
    .then(handleResponse)
    .then(pages => {
      console.log(pages);
      return pages;
    }
  );
}

function handleResponse(response) {
    return response.text().then(text => {
      // console.log(response)
        const data = text && JSON.parse(text);
        if (!response.ok) {
          console.log("error error");
            if (response.status === 401) {
              console.log("weird response")
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
