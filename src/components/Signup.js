// src/Signin.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import fig1 from './fig1.png';

const Signup = () => {
  const [userData, setUserData] = useState({ Name: '', Password: '' });
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      const parsedUserData = JSON.parse(userCookie);
      setLoggedInUser(parsedUserData);
    }
  }, []);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const inputName = e.target.value;
    // Regular expression to match only alphabetic characters
    const onlyChars = /^[a-zA-Z\s]*$/;
    
    if (onlyChars.test(inputName)) {
      setUserData({ ...userData, Name: inputName });
    }
  };

  const handlePasswordChange = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      Password: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasNumber = /\d/.test(userData.Password); // Check if the password contains a number
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(userData.Password); // Check if the password contains a special character

  if (userData.Name && userData.Password && hasNumber && hasSpecialChar) {
    const userToStore = { Name: userData.Name, Password: userData.Password };
    Cookies.set('user', JSON.stringify(userToStore), { expires: 30 });
    alert("You are signed in");
    navigate('/Login');
  } else {
    alert(" Password: at least one number, and one special character are required.");
  }
};

  return (
    <div>
      
    <div style={{
      background: `url(${fig1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:"700px",
      
      /* Add any other background properties here */
  }}>
     <h1 style={{ color:"red", marginLeft:"80px",paddingTop:"40px"}}>NETFLIX</h1>
             <button style={{ width: "80px", height: "40px", marginLeft: "1350px", marginTop: "-60px", background: "violet", color: "white", position: "absolute" }} onClick={()=> navigate('/')}>Home</button>
            
  </div>
  
    <div style={{ marginLeft: '550px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '400px', paddingBottom: '20px', borderBlockColor: 'red',background:"pink" ,marginTop:"-500px"}}>
      <h2 style={{color:"brown"}}>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ marginBottom: '15px' }}>
          Name:
          <input
            type="user name"
            value={userData.Name}
            onChange={handleNameChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <br />
        <label style={{ marginBottom: '15px' }}>
          Password:
          <input
            type="password"
            value={userData.Password}
            onChange={handlePasswordChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>
          Sign up
        </button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
