
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import{auth} from './firebase'
import { CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {

  const [{isopen,user,darkMode},dispatch]=useStateValue()


  const theme=createTheme({

    palette:{
      type: darkMode ? "dark" : "light",
      mode: darkMode ? "dark" : "light"
    }
  })

  useEffect(()=>{
    
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch({
          type:actionTypes.SET_USER,
          user:user
        })

      }

    })


  },[])


  return (
    <div className="App">
  
    

    {
      !user ? (
        <>
        <Header/>
       <Login/>
      </>) : 
         (
          <>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
                <Header/>
               <div className={`app__central ${isopen ? "displayed":""}`}>
                <SideBar/>
                <Main/>
                </div> 
        </ThemeProvider>
         </>                  
           
          ) }  


         </div>
        
  );
}

export default App;
