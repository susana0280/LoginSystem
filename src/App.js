
import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import{auth} from './firebase'

function App() {

  const [{isopen,user},dispatch]=useStateValue()

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
  
    <Header/>

    {
      !user ? (<Login/>) :    (<div className={`app__central ${isopen ? "displayed":""}`}>
                               <SideBar/>
                                <Main/>
                                </div> )
    }




    </div>
  );
}

export default App;
