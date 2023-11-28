import axios from './axios'

export const registerUser = (user) => {
    return axios.post(`/users/register`, user)
}

export const loginUser = (user) => {
    return axios.post(`/users/login`, user)
}

export const logoutRequest = (data, token) => {
    return axios.post(`/users/logout`, data, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

//************** get loggedUserData
export const getUserDataReq = (id, token) => {
    return axios.get(`/users/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

//************** update user data
export const updateUserDataReq = (id, data, token) => {
    return axios.put(`/users/${id}`, data, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

export const updateUserPassReq = (id, pass, token) => {
    return axios.put(`/users/pass/${id}`, pass, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

export const updateUserEmailReq = (id, email, token) => {
    return axios.put(`/users/email/${id}`, email, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}