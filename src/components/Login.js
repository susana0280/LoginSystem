import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import {auth,provider} from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

const Login = () => {
  const [{user},dispatch]=useStateValue()


    const signin=()=>{
      
      auth.signInWithPopup(provider)
      .then((result)=>{dispatch({

        type:actionTypes.SET_USER,
        user:result.user
          })
        })
        .catch((error)=>{
          alert(error.message)
        })
      }

  return (
    <div className="login" >
      
      <h1>Welcome to out blog app!</h1>
      <Button variant="contained" color='primary' onClick={signin}>Sign in with Google</Button>
    </div>
  )
}

export default Login
