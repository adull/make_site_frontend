import { authHeader } from '../helpers';

export const editSiteService = {
  addSection,
  editSection,
  getStyle
}

function addSection(sectionData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: sectionData
  }

  let siteURL = sectionData.siteURL
  let fetchURL = `/api/add-section/ + siteURL`;

  return fetch(fetchURL, requestOptions)
      .then(handleResponse)
      .then(addSection => {
        console.log("done adding section")
      });
}

function editSection(sectionData) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: sectionData
  }

  let siteURL = sectionData.siteURL;
  let sectionID = sectionData.sectionID;

  let fetchURL = `/api/edit-section` + siteURL + `/` + sectionID;

  return fetch(fetchURL, requestOptions)
      .then(handleResponse)
      .then(addSection => {
        console.log("done adding section")
      });
}

function getStyle(siteURL) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`/api/get-style/` + siteURL, requestOptions)
    .then(handleResponse)
    .then(style => {
      return style;
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
