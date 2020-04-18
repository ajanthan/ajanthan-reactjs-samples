import React,{useContext} from 'react';
import UserContext from './UserContext'
import './Home.css';

function Home() {
const userContext=useContext(UserContext);
  return (
    <div className="container-wrapper">     
      {userContext.isUserLoggedIn ? <div className="container"> <h1> Hello {userContext.user}!</h1> </div>:<button className='lg-btn' onClick={userContext.handleLogin} type='button'>Login here</button>} 
    </div>
  );
}

export default Home;
