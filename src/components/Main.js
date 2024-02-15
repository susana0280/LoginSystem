
import React, { useState } from 'react'
import '../components/Main.css'
// import Post from './Post'
// import '../components/Post'
import Post from '../components/Post'
import { TextField } from '@mui/material'



const Main = () => {
  
  const[posts,setPosts]=useState([])
  
  const[input,setInput]=useState({
        title:'',
        text:''
  })
  
  const handleSubmit=(e)=>{
    e.preventDefault()
   
    if(input.title && input.text){
      setPosts([input, ...posts])
   
      setInput({
        title:'',
        text:''
      })
    }
    else(
      alert("add your post")
    )

  }
  // console.log(posts)
 
  return (
    <div className='main'>
     
      <div className='main__input'>
          <form>
            <div className='main__inputForm'>
              <TextField id="outlined-basic" label="Title" variant="outlined" value={input.title} onChange={e=>setInput({...input,title:e.target.value})}/>
              <TextField className="main__inputFormText"   id="standard-basic" label="Enter your post here..." variant="standard" value={input.text} onChange={e=>setInput ({...input,text:e.target.value})}     />
             
            
              </div>
              <button type='submit' onClick={handleSubmit}>Click Me</button>
           
          </form>   
      </div>

      <div className='main__post'>
      
      {
        posts.map(({title,text})=><Post title={title} text={text}/>)
      }
      
      </div>

    </div>
  )
}

export default Main
