import tokenService from './tokenService';
import userService from "./userService"

const BASE_URL = 'http://localhost:3000/users/';

// export default {
//   show,
//   // create
// };

// function show() {
//   if (userService.getUser() === null) {
//   }
//   else {
//   // if token sticks then run GET
//   const options = {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer ' + tokenService.getToken(),
//       // 'Content-Type': "application/x-www-form-urlencoded"
//     },
//   };
//   return fetch(BASE_URL + `/${userService.getUser().id}`, options).then(res => res.json());
//   }


// }


// ${userService.getUser().id}

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