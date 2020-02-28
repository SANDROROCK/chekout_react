const axios = require("axios");

const api = axios.create({
  URL: "http://localhost:3333"
});

export default api;
