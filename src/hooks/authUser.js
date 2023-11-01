import axios from './axios'

export const registerUser = (user) => {
    return axios.post(`/users/register`, user)
}

export const loginUser = (user) => {
    return axios.post(`/users/login`, user)
}

export const logoutRequest = () => {
    return axios.post(`/users/logout`)
}

export const getUserDataReq = () => {
    return axios.get("/users/profile")
}