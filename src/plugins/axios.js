import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDAxZjU4MzZmMWNlNTVlNjQwZmQzOWU2NTlhOTNjZSIsInN1YiI6IjY1MjNmYzkwNzQ1MDdkMDEzOTVmMzhkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C0rj2xDNwcqaIVdTNVWlJ9KF9DnOYg_G_Xwy2PwwAKo`
  }
})

export default api