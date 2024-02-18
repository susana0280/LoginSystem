
import React, { useEffect, useState } from 'react'
import '../components/Main.css'
import Post from '../components/Post'
import { TextField } from '@mui/material'
import firebase, { db } from '../firebase'

import firebaseDB from 'firebase/compat/app'


const Main = () => {
  
 


  const[posts,setPosts]=useState([])
  
  const[input,setInput]=useState({
        title:'',
        text:''
  })
  useEffect(()=>{

    db.collection('posts').orderBy("timestamp","desc").onSnapshot(snapshot=>setPosts(snapshot.docs.map(doc=>(
      {
      id:doc.id,
      data:doc.data()
  
    })))
    )},[])


  const handleSubmit=(e)=>{
    e.preventDefault()
   
    if(input.text){

      db.collection('posts').add({
        title:input.title,
        text:input.text,
        timestamp:firebaseDB.firestore.FieldValue.serverTimestamp()
      
      })
 
      setInput({
        title:"",
        text:""
      })
    }
    else(
      alert("add your post")
    )

  }

 




  return (
    <div className='main'>
     
      <div className='main__input'>
          <form>
            <div className='main__inputForm'>
              <TextField id="outlined-basic" label="Title" variant="outlined" value={input.title} onChange={e=>setInput({...input,title:e.target.value})}/>
              <TextField className="main__inputFormText"   id="standard-basic" label="Enter your post here..." variant="standard" value={input.text} onChange={e=>setInput ({...input,text:e.target.value})}     />
             
            
              </div>
              <button type='submit' onClick={handleSubmit}></button>
           
          </form>   
      </div>

      <div className='main__post'>
      
      {
        posts.map(({id,data:{title,text}})=><Post title={title} text={text} id={id} key={id}/>)
      }
      
      </div>

    </div>
  )
}

export default Main
