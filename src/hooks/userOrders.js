import axios from './axios'

export const createOrderReq = (body, token) => {
    return axios.post('/user/order', body, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

export const getUserOrdersReq = (userid, token) => {
    return axios.post('/user/orders', userid, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}

export const getSingleOrderReq = (id, token) => {
    console.log(id)
    console.log(token)
    return axios.get(`/user/order/${id}`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })
}