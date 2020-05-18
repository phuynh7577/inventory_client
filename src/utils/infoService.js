import tokenService from './tokenService';
import userService from "./userService"

const BASE_URL = 'http://localhost:3000/users';

export default {
  index,
  // create
};

function index() {
  console.log()
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken(),
      'Content-Type': "application/x-www-form-urlencoded"
    },
  };
  console.log(userService.getUser().id)
  return fetch(BASE_URL + `/${userService.getUser().id}`, options).then(res => res.json());
}


// function create(score) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       // Add this header - don't forget the space after Bearer
//       'Authorization': 'Bearer ' + tokenService.getToken()
//     },
//     body: JSON.stringify(score)
//   };
//   return fetch(BASE_URL, options).then(res => res.json());
// }