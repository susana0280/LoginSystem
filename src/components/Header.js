import React from 'react'
import '../components/Header.css'
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../imags/logo.jpg'
import { Avatar, Button, Switch } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useStateValue } from '../StateProvider';
import {actionTypes}from'../reducer'
import { auth } from '../firebase';



const Header = () => {

    const [{isopen,user,darkMode},dispatch]=useStateValue()
  
    const toggleMenu=()=>{

      dispatch({
        type:actionTypes.TOGGLE_MENU,
        isopen:!isopen

      })

    }

const signOut=()=>{

auth.signOut()
.then(user=>dispatch({

  type:actionTypes.SET_USER,
  user:null
}))
.catch()

}


  return (
    <div className="header">

        <div className='header__left'>
          

   
            <IconButton onClick={toggleMenu}>
            <MenuIcon fontSize='large'/>
            </IconButton>
            <img src={logo}  alt="logo"/>
        </div>


        <div className='header__right'>
                   <Avatar src={user?.photoURL}/>
                  <Switch checked={darkMode} onChange={()=>{dispatch({
                    type:actionTypes.SET_DARKMODE,
                    darkMode:!darkMode
                  }
                  )}}/>
                   {user &&  <Button onClick={signOut} variant='contained'>Sign out</Button>}
                  
        </div>
       
      
    </div>
  )
}

export default Header
