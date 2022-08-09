import axios from "axios"

export const logIn = (logInObj) => {
    let response = axios.post("https://localhost:44356/api/User/Login", logInObj)
    return response
}

export const register = (signUpObj) => {
    let response = axios.post("https://localhost:44356/api/User/Register", signUpObj)
    return response
}