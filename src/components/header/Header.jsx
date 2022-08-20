import React from 'react'
import './Header.css'
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../../assets/education.svg'
import LogoutPopper from '../logoutPopper/LogoutPopper';
import LoginPopper from '../loginPopper/LoginPopper';

function Header() {
    let loginStatus = (localStorage.getItem('token') === null) ? false : true
    const [isLoggedIn, setIsLoggedIn] = React.useState(loginStatus);

    const changeLoginStatus = (value) => {
        setIsLoggedIn(value)
    }

    return (
        <>
            <div className='header_outer-box'>

                <div className="header_inner-box">

                    <div className="header_box1">

                        <img src={logo} alt='education-logo' />

                        <span>bookstore</span>

                    </div>

                    <div className='header_box2'>

                        <InputBase className='header_input-base' id='search-input' placeholder="Search ..." type='text' />

                    </div>

                    <div className="header_menu">

                        <div className="header_menu_profile">

                            {isLoggedIn ?
                                <LogoutPopper changeLoginStatus={changeLoginStatus} />
                                :
                                <LoginPopper changeLoginStatus={changeLoginStatus} />
                            }

                        </div>

                        <div className="header_menu_cart">

                            <div className="header_menu_inner-div">

                                <ShoppingCartOutlinedIcon sx={{ color: 'white', width: '20px', height: '20px' }} />

                                <span className='header_menu_label'>Cart</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Header