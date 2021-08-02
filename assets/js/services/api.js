class Api {
  async get(url) {
    try {
      const res = await fetch(url, {
        TYPE: "GET",
        dataType: "jsonp",
        crossDomain: true,
      });
      res.then((response) => response.json()).then((data) => data);
      console.log(res);
      return res;
    } catch (error) {}
  }
}

export default new Api();
