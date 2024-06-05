import axios from "axios";

// creating backend Config! 

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-type": "multipart/form-data"
    }
})

// test api 
export const testApi = () => Api.get('/test')

// register api
export const registerUserApi = (data) => Api.post('/api/user/create', data)

// login api
export const loginUserApi = (data) => Api.post('/api/user/login', data)

// create product api
export const createProductApi = (data) => Api.post('/api/product/create', data)

// get all products api
export const getAllProducts = () => Api.get('/api/product/get_all_products')


// get single product 







