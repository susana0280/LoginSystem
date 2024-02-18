import React from 'react'
import '../components/Post.css'
import { useStateValue } from '../StateProvider'
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {db} from '../firebase'

const Post = ({title,text,id}) => {

  const [{user},dispatch]=useStateValue();


  const removePost=()=>{

    db.collection("posts").doc(id).delete()

  }



  return (
    <div className='post'>
     
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
       <ThumbUpIcon/>
    </div>
   
  )
}

export default Post
