import axios from 'axios'

const instance = axios.create({
  baseURL: "https://git.heroku.com/ithought93.git/",
   headers: { "Access-Control-Allow-Origin": "*" }
});

export default instance;

// https://ithought-app.firebaseio.com/