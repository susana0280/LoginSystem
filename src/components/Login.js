import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import {auth,provider} from '../firebase';
import { actionTypes } from '../reducer';

const Login = () => {


    const signin=()=>{
      
      auth.signInWithPopup(provider)
      .then((result)=>{
        console.log(result)
      })
  
      console.log('holaaaa')
      }

  return (
    <div className="login" >
      login
      <h1>Welcom to out blog app!</h1>
      <Button variant="contained" color='primary' onClick={signin}>Sign in with Google</Button>
    </div>
  )
}

export default Login
