import React,{useContext,useState} from 'react';
import UserContext from './UserContext'
import './Home.css';

function Home() {
const userContext=useContext(UserContext);
const [showProfile,setShowProfile]=useState(false);
const handleProfileClick=()=>{
  setShowProfile(!showProfile);
}
  return (
    <header>
    <nav>
      <a href='#' onClick={handleProfileClick}>{userContext.user}</a>
    </nav> 
    {showProfile ?
    <div className="popup"> 
      <ul>
        <li><a onClick={userContext.handleLogout}>logout</a></li>
      </ul>
    </div> 
    :null }
    </header>

  );
}

export default Home;
