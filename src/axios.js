import axios from 'axios'

const instance = axios.create({
  baseURL: "https://ithought-app.firebaseio.com/"
});

export default instance;