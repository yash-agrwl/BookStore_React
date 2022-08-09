import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import { logIn } from '../../services/userservice';
const emailRegex = /^[a-z0-9]+([-+_.][a-z0-9]+)?[@][a-z0-9]+[.][a-z0-9]{2,3}([.][a-z]{2})?$/;
const passwordRegex = /^(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])[\w\d]{0,}[\W]{1}[\w\d]{0,}$/;

function Login() {
    const [logInObj, setLogInObj] = React.useState({ email: "", password: "" });
    const [regexObj, setRegexObj] = React.useState({ emailBorder: false, emailHelper: "", pwdBorder: false, pwdHelper: "" });

    const TakeEmail = (event) => {
        setLogInObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const TakePassword = (event) => {
        setLogInObj((prevState) => ({ ...prevState, password: event.target.value }))
    }

    const Submit = () => {
        // console.log(signInObj.email)
        // console.log(signInObj.password)

        let emailTest = emailRegex.test(logInObj.email)
        let passwordTest = passwordRegex.test(logInObj.password)

        if (emailTest === true) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter correct Email" }))
        }

        if (passwordTest === true) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: false, pwdHelper: "" }))
        }
        else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: true, pwdHelper: "Enter correct Password" }))
        }

        if (emailTest === true && passwordTest === true) {
            logIn(logInObj).then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <>
            <form className='login_form'>

                <div className="login_email">

                    <InputLabel className='login_input-label' error>Email Id</InputLabel>

                    <TextField onChange={TakeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                        className='login_form-input' variant="outlined" type='email' size='small' fullWidth />

                </div>

                <div className="login_password">

                    <InputLabel className='login_input-label'>Password</InputLabel>

                    <TextField onChange={TakePassword} error={regexObj.pwdBorder} helperText={regexObj.pwdHelper}
                        className='login_form-input' variant="outlined" type='password' size='small' fullWidth />

                    <a href='#' id='login_forgot-pwd'>Forgot Password?</a>

                </div>

                <Button onClick={Submit} variant="contained" fullWidth>Login</Button>

            </form>

            <div className="login_divider">

                <div className="login_divide-line"></div>

                <div id='login_divide-text'>OR</div>

                <div className="login_divide-line"></div>

            </div>

            <div className='login_other-options'>

                <Button id='login_facebook' variant="contained">Facebook</Button>

                <Button id='login_google' variant="contained">Google</Button>

            </div>
        </>
    )
}

export default Login