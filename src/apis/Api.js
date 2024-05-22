import axios from "axios";

// creating backend Config! 

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-type": "application/json"
    }
})

// test api 
export const testApi = () => Api.get('/test')

// register api
export const registerUserApi = (data) => Api.post('/api/user/create', data)

// login api
export const loginUserApi = (data) => Api.post('/api/user/login', data)




