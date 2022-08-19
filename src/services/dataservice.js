import axios from "axios"

// const headerConfig = {
//     headers: {
//         Authorization: "Bearer " + localStorage.getItem('token')
//     }
// }

const setToken = () => {

    const token = localStorage.getItem('token');

    const headerConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return headerConfig;
}

export const getAllBooks = () => {
    // console.log(headerConfig)
    const headerConfig = setToken();
    let response = axios.get("https://localhost:44356/api/Book/GetAll", headerConfig)
    return response
}

export const getCartItems = () => {
    const headerConfig = setToken();
    let response = axios.get("https://localhost:44356/api/Cart/GetAllCartItems", headerConfig)
    return response
}

export const updateCart = (bookId, bookCount) => {
    const headerConfig = setToken();
    let response = axios.patch(`https://localhost:44356/api/Cart/UpdateCart?bookId=${bookId}&count=${bookCount}`, null, headerConfig)
    return response
}

export const addToCart = (bookId) => {
    const headerConfig = setToken();
    let response = axios.post(`https://localhost:44356/api/Cart/AddToCart?bookId=${bookId}`, null, headerConfig)
    return response
}

export const addFeedback = (addFeedbackObj) => {
    const headerConfig = setToken();
    let response = axios.post("https://localhost:44356/api/Feedback/Add", addFeedbackObj, headerConfig)
    return response
}

export const getAllFeedback = (bookId) => {
    const headerConfig = setToken();
    let response = axios.get(`https://localhost:44356/api/Feedback/GetAll?bookId=${bookId}`, headerConfig)
    return response
}

export const getBookById = (bookId) => {
    const headerConfig = setToken();
    let response = axios.get(`https://localhost:44356/api/Book/GetById?bookId=${bookId}`, headerConfig)
    return response
}