import './dashboard-style.css';
import bewareLogo from './src/img/beaware.png'
import React, { useState, useEffect } from 'react';
import Apng from './src/img/A.png';
import GenerateStreamIcon from './src/img/Generate Stream Icon.png';
import UndrawBusinessman from './src/img/undraw_businessman_e7v0.svg';
import Vector from './src/img/Vector.svg'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [name, setName]=useState("Name");

  useEffect(() => {
    // Fetch userData from localStorage when component mounts
    const storedUserData = localStorage.getItem("userData");
    console.log(storedUserData);
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      // console.log(userData);
      // setName(userData.username);
    }
  }, []);

  return (
    <div id="dashboardMain">
      <div id="topBar">
        <img src={bewareLogo} alt="beaware logo" />
        <button>Sign Out</button>
      </div>

      <div id="main">
        <div id="left">
          <img src={UndrawBusinessman} alt="UndrawBusinessman"/>
        </div>

        <div id="mid">
          <div id="container1">
          <h1 style={{ fontSize: '40px', fontFamily: 'Cooper, sans-serif' }}>Dashboard</h1>

            {/* <h1 style={{fontSize:'40px', fontFamily: 'Algeria', sans-serif}}>Dashboard</h1> */}

            <div id="container12">
              <img src={Apng} alt="Profile Initials" />
            </div>
            <h4 style={{marginTop:'2px', fontSize:'20px'}}>{userData? userData.email??"":""}</h4>
          </div>

          <div id="container2">
            <p style={{ fontSize: '30px', fontFamily: 'Cooper, sans-serif', margin:'2px', fontWeight:'lighter' }}>
              Stream information:<br />
              Color : {userData?userData.color:""}<br />
              Logo url : <a href={userData ? userData.url : "#"}>{userData?userData.url??"":""}</a>
            </p>
          </div>
          <br />

          <div id="container3">
          <img src={GenerateStreamIcon} alt="Generate Stream Icon" />
          <br />
          <Link to="/stream">Click to generate Stream</Link>
          {/* <a href="https://www.google.com">Click to generate Stream</a> */}
          </div>

          <br />

          <div id="editDeleteBtn">
          <table>
            <tr>
            <button>Edit Profile</button>
            <text>&#160;</text>
            <button>Delete Profile</button>
            </tr>
          </table>
            {/* <button>Edit Profile</button>
            <br />
            <button>Delete Profile</button> */}
          </div>
        </div>

        <div id="right">
          <img src={Vector} alt="vector"/>
        </div>
      </div>

      
    </div>

  );
};

export default Dashboard;