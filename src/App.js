
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import SideBar from './components/SideBar';
import { useStateValue } from './StateProvider';

function App() {

  const [{isopen,user},dispatch]=useStateValue()


  return (
    <div className="App">
  
    <Header/>

    {
      !user ? (<Login/>) :    (<div className={`app__central ${isopen ? "displayed":""}`}>
                               <SideBar/>
                                <Main/>
                                </div> )
    }




    {/* <Login/>
    <div className={`app__central ${isopen ? "displayed":""}`}> */}
    {/* <SideBar/>
    <Main/> */}
    {/* </div> */}



    </div>
  );
}

export default App;
