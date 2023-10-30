import axios from 'axios'

const url = 'http://localhost:3002/rat-club-api/v1/users'

export const registerUser = (user) => {
    return axios.post(`${url}/register`, user)
}

export const loginUser = (user) => {
    return axios.post(`${url}/login`, user)
}

export const logoutRequest = () => {
    return axios.post(`${url}/logout`)
}