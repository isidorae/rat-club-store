import axios from 'axios'

 // baseURL: 'http://localhost:3002/rat-club-api/v1',

const instance = axios.create({
    baseURL: 'https://ratclub.onrender.com/rat-club-api/v1',
    // baseURL: 'http://localhost:3002/rat-club-api/v1',
    withCredentials: true
})

export default instance