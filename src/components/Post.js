import React from 'react'
import '../components/Post.css'
import { useStateValue } from '../StateProvider'
import { Avatar } from '@mui/material';

const Post = ({title,text}) => {

  const [{user},dispatch]=useStateValue();

  return (
    <div className='post'>
      <Avatar src={user?.photoURL}/>
      <h1>{title}</h1>
      <h4>{text}</h4>
    </div>
  )
}

export default Post
