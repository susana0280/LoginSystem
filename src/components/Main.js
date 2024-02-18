
import React, { useEffect, useState } from 'react'
import '../components/Main.css'
import Post from '../components/Post'
import { TextField } from '@mui/material'
import firebase, { db } from '../firebase'
import FlipMove from 'react-flip-move';
import firebaseDB from 'firebase/compat/app'
import { useStateValue } from '../StateProvider';


const Main = () => {
  
  const [{user},dispatch]=useStateValue()

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

console.log(user)
  const handleSubmit=(e)=>{
    e.preventDefault()
   
    if(input.text){

      db.collection('posts').add({
        title:input.title,
        text:input.text,
        username:user?.displayName,
        avatar:user?.photoURL,
        timestamp:firebaseDB.firestore.FieldValue.serverTimestamp(),
        isBlue:false
      
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
              <button className='button' type='submit' onClick={handleSubmit}></button>
           
          </form>   
      </div>

      <div className='main__post'>
      <FlipMove>
      {
       
        posts.map(({id,data:{title,text,isBlue,username,avatar}})=><Post title={title} text={text} id={id} key={id} isBlue={isBlue} username={username} avatar={avatar}/>)
     
      }
      </FlipMove>
      </div>

    </div>
  )
}

export default Main
