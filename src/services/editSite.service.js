import { authHeader } from '../helpers';

export const editSiteService = {
  addSection,
  editSection,
  getStyle
}

function addSection(siteURL, style) {
  console.log(style);
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(style)
  }

  let fetchURL = `/cms-api/add-section/` + siteURL;

  return fetch(fetchURL, requestOptions)
      .then(handleResponse)
      .then(addSection => {
        // console.log("done adding section")
        return addSection;
      });
}

function deleteSection(siteURL, sectionIndex) {
  const requestOptions = {
    method: 'POST',
    headers: authHeader()
  }

  return fetch(`/cms-api/delete-section/` + siteURL + '/' + sectionIndex, requestOptions)
    .then(handleResponse)
    .then(deleteSection => {
      console.log(deleteSection)
      return deleteSection;
    });

}

function editSection(siteURL, sectionData) {
  let sectionDataObj = {
    sectionData
  }

  // let test = sectionData.sections[0].text[0].html;
  // console.log(test)
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    // body: sectionData
    body: JSON.stringify(sectionData)
  }

  let fetchURL = `/cms-api/edit-section/` + siteURL

  return fetch(fetchURL, requestOptions)
      .then(handleResponse)
      .then(addSection => {
        // console.log("done adding section")
        return addSection;
      });
}

function getStyle(siteURL) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`/cms-api/get-style/` + siteURL, requestOptions)
    .then(handleResponse)
    .then(style => {
      return style;
    })
}

function handleResponse(response) {
    // console.log(response)
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
