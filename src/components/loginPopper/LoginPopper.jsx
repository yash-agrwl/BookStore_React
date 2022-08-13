import React from 'react'
import './LoginPopper.css'
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function LoginPopper() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <>
            <div className="header_menu_inner-div" onClick={handleClick}>

                <PersonOutlineIcon sx={{ color: 'white', width: '20px', height: '20px' }} />

                <span className='header_menu_label'>Profile</span>

            </div>

            <Popper id={id} open={open} anchorEl={anchorEl}>

                <Box className='popper_login-user' sx={{ bgcolor: 'background.paper' }}>

                    <div className="popper_login_section1">

                        <div className="popper_welcome">Welcome</div>

                        <div className="popper_detail">To acsess account and manage orders</div>

                        <div className="popper_login-btn">LOGIN/SIGNUP</div>
                        
                    </div>

                    <div className="popper_divider" />

                    <div className="popper_login_section2">

                        <div className="popper_login_orders">

                            <LocalMallOutlinedIcon className='popper_icon' />

                            <span>My Orders</span>

                        </div>

                        <div className="popper_login_wishlist">

                            <FavoriteBorderOutlinedIcon className='popper_icon' />

                            <span>My Wishlist</span>

                        </div>

                    </div>

                </Box>

            </Popper>
        </>
    )
}

export default LoginPopper