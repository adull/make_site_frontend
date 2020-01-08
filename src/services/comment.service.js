import { authHeader } from '../helpers';

export const commentService = {
  newComment,
  getComments,
  deleteComment,
}

function newComment(newCommentData) {
  // console.log(newCommentData)
  console.log(window)
  let pathName = window.location.pathname
  if(pathName.startsWith('/p/')) {
    let url = pathName.slice(3);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCommentData)
    };

    // return null

    return fetch(`/cms-api/new-comment/` + url, requestOptions)
        .then(handleResponse)
        .then(newComment => {
            console.log(newComment);
            return newComment.comments;
        });
  }
  else {
    alert("wtf are u doing man")
    return null;
  }
}

function getComments(url) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  // return null

  return fetch(`/cms-api/get-comments/` + url, requestOptions)
      .then(handleResponse)
      .then(comments => {
          console.log(comments);
          return comments;
      });
}

function deleteComment(commentID) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }

  return fetch(`/cms-api/delete-comment/` + commentID, requestOptions)
    .then(handleResponse)
    .then(newComments => {
      console.log(newComments)
      return newComments;
    });
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
          // console.log("sucess is false")
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        else {
          // console.log("should return data")
          return data;
        }
    });
}
