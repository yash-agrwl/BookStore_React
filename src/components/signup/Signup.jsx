import React from 'react'
import './Signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';

function Signup() {
    return (
        <form className='signup_form'>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Full Name</InputLabel>

                <TextField className='signup_textfield' variant="outlined" type='text' size='small' fullWidth />

            </div>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Email Id</InputLabel>

                <TextField className='signup_textfield' variant="outlined" type='email' size='small' fullWidth />

            </div>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Password</InputLabel>

                <TextField className='signup_textfield' variant="outlined" type='password' size='small' fullWidth />

            </div>

            <div className='signup_form-input'>

                <InputLabel className='signup_input-label'>Mobile Number</InputLabel>

                <TextField className='signup_textfield' variant="outlined" type='tel' size='small' fullWidth />

            </div>

            <Button variant="contained" fullWidth>Signup</Button>

        </form>
    )
}

export default Signup