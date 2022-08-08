import React from 'react'
import './UserAccount.css'
import logo from '../../assets/account_side-img.png'
import Button from '@mui/material/Button';
import Signup from '../../components/signup/Signup';
import Login from '../../components/login/Login';

function UserAccount() {

    const [existAccount, setExistAccount] = React.useState(true)

    const switchForm = (existAccount) => {
        return (
            <>
                {existAccount ? (<Login />) : (<Signup />)}
            </>
        )
    }

    return (
        <div className='account_outer-box'>

            <div className="account_inner-box">

                <div className="account_box1">

                    <figure className='account_figure'>

                        <img src={logo} alt='cart-logo' width='245px' height="245px" />

                        <figcaption>Online Book Shopping</figcaption>

                    </figure>

                </div>

                <div className="account_box2">

                    <div className="account_section1">

                        <div className='account_switch'>

                            <Button onClick={() => setExistAccount(true)} variant="text" sx={{ width: '72px' }}>Login</Button>

                            {existAccount && <div className='account_active-btn' />}

                        </div>

                        <div className='account_switch'>

                            <Button onClick={() => setExistAccount(false)} variant="text" sx={{ width: '89px' }}>Signup</Button>

                            {!existAccount && <div className='account_active-btn' />}

                        </div>

                    </div>

                    <div className="account_section2">

                        {switchForm(existAccount)}

                    </div>


                </div>

            </div>

        </div>
    )
}

export default UserAccount