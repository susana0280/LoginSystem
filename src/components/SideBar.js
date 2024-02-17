import React from 'react'
import '../components/SideBar.css'
import { useStateValue } from '../StateProvider'



const SideBar = () => {
const[{user},dispatch]=useStateValue()
  return (
    <div className='sidebar'>
      <h1>Welcome</h1>
      <h4>{user?.displayName}</h4>
    </div>
  )
}


export default SideBar
