import React from 'react'
import './Signup.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Signup() {
    return (
        <form className='signup_form'>

            <TextField className='signup_form-input' variant="outlined" type='text' label='Full Name' size='small' fullWidth />

            <TextField className='signup_form-input' variant="outlined" type='email' label='Email id' size='small' fullWidth />

            <TextField className='signup_form-input' variant="outlined" type='password' label='Password' size='small' fullWidth />

            <TextField className='signup_form-input' variant="outlined" type='tel' label='Mobile Number' size='small' fullWidth />

            <Button variant="contained" fullWidth>Signup</Button>
            
        </form>
    )
}

export default Signup