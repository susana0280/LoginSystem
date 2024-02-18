import React, { useEffect, useState } from 'react'
import '../components/SideBar.css'
import { useStateValue } from '../StateProvider'
import FilterDramaIcon from '@mui/icons-material/FilterDrama';


const SideBar = () => {

const[{user},dispatch]=useStateValue()
const [weatherData,setWeatherData]=useState();

useEffect(()=>{


const succesCallback=async (position)=>{


  
  const longitude=position.coords.longitude
  const latitude=position.coords.latitude
  console.log(longitude,'_________',latitude)

  const url = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${longitude}&lat=${latitude}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b5a3f8f4c3mshe5eca3bcb531a30p18aa70jsn989721fca74d',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    setWeatherData(result.data)
    console.log(weatherData)


  } catch (error) {
    console.error(error);
  }
  
}


const errorCallback=err=>console.log(err)

  navigator.geolocation.getCurrentPosition(succesCallback,errorCallback)


},[])




  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h4>{weatherData[0]?.city_name}</h4>
        <img src={`icons/${weatherData[0]?.weather.icon}`} alt="el tiempo"/>
        <p>{weatherData[0]?.weather.description}</p>
        <h1>{weatherData[0]?.temp}</h1>
      </div>

    <div className='"sidebar__bottom'>
        <h1>Welcome</h1>
        <h4>{user?.displayName}</h4>
    </div>
      
    </div>
  )
}


export default SideBar
