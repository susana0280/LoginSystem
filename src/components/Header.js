import React from 'react'
import '../components/Header.css'
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../imags/logo.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useStateValue } from '../StateProvider';
import {actionTypes}from'../reducer'



const Header = () => {

    const [{isopen},dispatch]=useStateValue()
   
    const toggleMenu=()=>{

      dispatch({
        type:actionTypes.TOGGLE_MENU,
        isopen:!isopen

      })

    }

  return (
    <div className="header">

        <div className='header__left'>
          

   
            <IconButton onClick={toggleMenu}>
            <MenuIcon fontSize='large'/>
            </IconButton>
            <img src={logo}  alt="logo"/>
        </div>


        <div className='header__medium'>

            <h3>Home</h3>
            <h3>Quick Menu
                <span><ExpandMoreIcon/></span>
            </h3>
        </div>


        <div className='header__right'>
           <form noValidate autoComplete='off'>
           <TextField id="filled-basic" label="Filled" variant="filled" />
            </form>

            <Avatar/>
        </div>
       
      
    </div>
  )
}

export default Header
