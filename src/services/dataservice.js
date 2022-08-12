import axios from "axios"

const headerConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }
}

export const getAllBooks = () => {
    // console.log(headerConfig)
    let response = axios.get("https://localhost:44356/api/Book/GetAll", headerConfig)
    return response
}

export const getCartItems = () => {
    let response = axios.get("https://localhost:44356/api/Cart/GetAllCartItems", headerConfig)
    return response
}

export const updateCart = (bookId, bookCount) => {
    let response = axios.patch(`https://localhost:44356/api/Cart/UpdateCart?bookId=${bookId}&count=${bookCount}`, null, headerConfig)
    return response
}

export const addToCart = (bookId) => {
    let response = axios.post(`https://localhost:44356/api/Cart/AddToCart?bookId=${bookId}`, null, headerConfig)
    return response
}

export const addFeedback = (addFeedbackObj) => {
    let response = axios.post("https://localhost:44356/api/Feedback/Add", addFeedbackObj, headerConfig)
    return response
}

export const getAllFeedback = (bookId) => {
    let response = axios.get(`https://localhost:44356/api/Feedback/GetAll?bookId=${bookId}`, headerConfig)
    return response
}