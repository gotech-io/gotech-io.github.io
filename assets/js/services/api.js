const API = "http://localhost:5000";
class Api {
  async get(url) {
    try {
      return fetch(url)
        .then((response) => response.json())
        .then((data) => data);
    } catch (error) {
      console.log(error);
    }
  }

  async post(url, body) {
    try {
      return fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getInstagramProfile(url) {
    try {
      return fetch(API)
        .then((response) => response.json())
        .then((data) => data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Api();
