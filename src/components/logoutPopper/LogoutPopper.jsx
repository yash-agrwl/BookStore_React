import React from 'react'
import './LogoutPopper.css'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function LogoutPopper(props) {
    let userName = localStorage.getItem('username').split(' ')[0];

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const logoutUser = () => {
        localStorage.clear()
        localStorage.setItem('isLoggedIn', false)
        props.changeLoginStatus(false)
    }

    return (
        <>
            <div className="header_menu_inner-div" onClick={handleClick}>

                <PersonOutlineIcon sx={{ color: 'white', width: '20px', height: '20px' }} />

                <span className='header_menu_label'>{userName}</span>

            </div>

            <Popper open={open} anchorEl={anchorEl}>

                <Box className='popper_logout-user' sx={{ bgcolor: 'background.paper' }}>

                    <div className="popper_greeting">Hello {userName},</div>

                    <div className="popper_logout_profile">

                        <div className="popper_logout_inner-div" id='profile'>

                            <PersonOutlineIcon className='popper_icon' id='profile-icon' />

                            <span id='profile-heading'>Profile</span>

                        </div>

                    </div>

                    <div className="popper_logout_orders">

                        <div className="popper_logout_inner-div">

                            <LocalMallOutlinedIcon className='popper_icon' />

                            <span>My Orders</span>

                        </div>

                    </div>

                    <div className="popper_logout_wishlist">

                        <div className="popper_logout_inner-div">

                            <FavoriteBorderOutlinedIcon className='popper_icon' />

                            <span>My Wishlist</span>

                        </div>

                    </div>

                    <div className="popper_logout-btn" onClick={logoutUser}>Logout</div>

                </Box>

            </Popper>
        </>
    )
}

export default LogoutPopper