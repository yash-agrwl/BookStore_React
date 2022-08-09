import React from 'react'
import './Signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import { register } from '../../services/userservice';
const fullNameRegex = /^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/;
const emailRegex = /^[a-z0-9]+([-+_.][a-z0-9]+)?[@][a-z0-9]+[.][a-z0-9]{2,3}([.][a-z]{2})?$/;
const passwordRegex = /^(?=.{8,}$)(?=.*[A-Z])(?=.*[0-9])[\w\d]{0,}[\W]{1}[\w\d]{0,}$/;
const mobileNoRegex = /^[+][0-9]{2}[0-9]{10}/;

function Signup() {
    const [signUpObj, setSignUpObj] = React.useState({ fullName: "", email: "", password: "", mobileNumber: "" });
    const [regexObj, setRegexObj] = React.useState({
        fullNameBorder: false, fullNameHelper: "", emailBorder: false, emailHelper: "", pwdBorder: false, pwdHelper: "",
        mobileNoBorder: false, mobileNoHelper: ""
    });

    const TakeFullName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, fullName: event.target.value }))
    }

    const TakeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }))
    }

    const TakePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }))
    }

    const TakeMobileNo = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, mobileNumber: event.target.value }))
    }

    const Submit = () => {
        let fullNameTest = fullNameRegex.test(signUpObj.fullName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let mobileNoTest = mobileNoRegex.test(signUpObj.mobileNumber)

        if (fullNameTest === true) {
            setRegexObj((prevState) => ({ ...prevState, fullNameBorder: false, fullNameHelper: "" }))
        }
        else if (fullNameTest === false) {
            setRegexObj((prevState) => ({ ...prevState, fullNameBorder: true, fullNameHelper: "Enter Valid FullName" }))
        }

        if (emailTest === true) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: false, emailHelper: "" }))
        }
        else if (emailTest === false) {
            setRegexObj((prevState) => ({ ...prevState, emailBorder: true, emailHelper: "Enter Valid Email" }))
        }

        if (passwordTest === true) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: false, pwdHelper: "" }))
        }
        else if (passwordTest === false) {
            setRegexObj((prevState) => ({ ...prevState, pwdBorder: true, pwdHelper: "Enter Valid Password" }))
        }

        if (mobileNoTest === true) {
            setRegexObj((prevState) => ({ ...prevState, mobileNoBorder: false, mobileNoHelper: "" }))
        }
        else if (mobileNoTest === false) {
            setRegexObj((prevState) => ({ ...prevState, mobileNoBorder: true, mobileNoHelper: "Enter Valid Mobile Number" }))
        }

        if (fullNameTest === true && emailTest === true && passwordTest === true && mobileNoTest === true) {
            console.log(signUpObj)
            register(signUpObj).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            })

        }
    }

    return (
        <form className='signup_form'>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Full Name</InputLabel>

                <TextField onChange={TakeFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper}
                    className='signup_textfield' variant="outlined" type='text' size='small' fullWidth />

            </div>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Email Id</InputLabel>

                <TextField onChange={TakeEmail} error={regexObj.emailBorder} helperText={regexObj.emailHelper}
                    className='signup_textfield' variant="outlined" type='email' size='small' fullWidth />

            </div>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Password</InputLabel>

                <TextField onChange={TakePassword} error={regexObj.pwdBorder} helperText={regexObj.pwdHelper}
                    className='signup_textfield' variant="outlined" type='password' size='small' fullWidth />

            </div>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Mobile Number</InputLabel>

                <TextField onChange={TakeMobileNo} error={regexObj.mobileNoBorder} helperText={regexObj.mobileNoHelper}
                    className='signup_textfield' variant="outlined" type='text' size='small' fullWidth />

            </div>

            <Button onClick={Submit} variant="contained" fullWidth>Signup</Button>

        </form>
    )
}

export default Signup