import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "164f0744122959939206e6c56c2abfba",
    language: "ko-KR",
  },
})

export default instance;