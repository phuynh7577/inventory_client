import tokenService from './tokenService';

const BASE_URL = 'https://liquor-iq-api.herokuapp.com/users';

function signup(user) {
  let newUser = {user: user}
    return fetch(BASE_URL, {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newUser)
    })
    .then(res => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error('Email already taken!');
    })
    // Parameter destructuring!
    .then(({token}) => tokenService.setToken(token));
  }


  function getUser() {
    return tokenService.getUserFromToken()
  }


  function logout() {
    tokenService.removeToken();
  }


  function login(creds) {
    let newUser = {user: creds}
    // console.log(newUser)
    return fetch(BASE_URL + '/login', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(newUser)
    })
    .then(res => {
      // Valid login if we have a status of 200 (res.ok)
      // console.log(res)
      if (res.ok) return res.json();
      throw new Error('Bad Credentials!');
    })
    .then(({token}) => tokenService.setToken(token));
  }

  // function user() {
  //   console.log(user)
  // }

  // console.log(user)

  export default {
    signup, 
    getUser,
    logout,
    login
  };
































