const API = "http://localhost:5000";
class Api {
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
