import React from 'react'
import '../components/Post.css'
import { useStateValue } from '../StateProvider'
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {db} from '../firebase'
import { forwardRef } from 'react'

const Post = forwardRef(({title,text,id,isBlue,username},ref) => {

  const [{user},dispatch]=useStateValue();


  const removePost=()=>{

    db.collection("posts").doc(id).delete()

  }

  const likePost=()=>{

    const likedPost=db.collection('posts').doc(id)

    likedPost.get().then((doc)=>likedPost.update({
      isBlue:!doc.data().isBlue

    }))
  }

  return (
    <div className='post' ref={ref}>
     
      <div className='post__body'>
       
        <div className='post__body__left'>
          <Avatar src={user?.photoURL} className='avatar'/>
           <h1>{title}</h1>
           <h4>{text}</h4>
        </div>
      
        <IconButton onClick={removePost} >
             <DeleteIcon/>
       </IconButton>
       </div>
       
       <IconButton onClick={likePost}>
          <ThumbUpIcon color={isBlue ? "primary" :""}/>
       </IconButton>
      {username}
    </div>
   
  )
})

export default Post
