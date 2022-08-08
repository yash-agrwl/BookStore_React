import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';

function Login() {
    return (
        <>

            <form className='login_form'>

                <div className="login_email">

                    <InputLabel className='login_input-label' error>Email Id</InputLabel>

                    <TextField className='login_form-input' variant="outlined" type='email' size='small' fullWidth />

                </div>

                <div className="login_password">

                    <InputLabel className='login_input-label'>Password</InputLabel>

                    <TextField className='login_form-input' variant="outlined" type='password' size='small' fullWidth />

                    <a href='#' id='login_forgot-pwd'>Forgot Password?</a>

                </div>

                <Button variant="contained" fullWidth>Login</Button>

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