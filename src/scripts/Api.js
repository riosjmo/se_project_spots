// utils/Api.js

class Api {
  constructor(options) {
    // constructor body
  }

  getInitialCards() {
  return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
  headers: {
    authorization: "229fe7f5-1dd5-4b37-9746-c0081404e2a7"
  }
})
  .then(res => res.json())
  }

  // other methods for working with the API
}

export default Api;