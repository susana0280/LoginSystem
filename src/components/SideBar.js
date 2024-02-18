import React from 'react'
import '../components/SideBar.css'
import { useStateValue } from '../StateProvider'



const SideBar = () => {
const[{user},dispatch]=useStateValue()
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h4>City Name</h4>
        <p>imagen nubes</p>
        <h1>temp ºC</h1>
      </div>

    <div className='"sidebar__bottom'>
        <h1>Welcome</h1>
        <h4>{user?.displayName}</h4>
    </div>
      
    </div>
  )
}


export default SideBar
