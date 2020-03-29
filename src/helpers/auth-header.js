export function authHeader() {
  let user = JSON.parse(localStorage.getItem('abdelrazaqCmsUser'));

  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token };
  }
  else {
    return {};
  }
}
