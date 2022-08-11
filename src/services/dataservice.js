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