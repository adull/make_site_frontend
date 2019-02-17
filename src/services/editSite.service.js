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

function editSection( siteURL, sectionData) {
  // console.log("**")
  // console.log(siteURL)
  // console.log(sectionIndex)
  // console.log(sectionData)
  // console.log("**")
  let test = {
    sectionData
  }
  console.log(test)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    // body: sectionData
    body: JSON.stringify(test)
  }


  let fetchURL = `/api/edit-section/` + siteURL

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
    console.log(response)
    return response.text().then(text => {

      // console.log(response)
        const data = text && JSON.parse(text);
        // console.log(data)
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
          // console.log("should return data")
          return data;
        }
    });
}
