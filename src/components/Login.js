import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';







 
const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
      });
      const navigate = useNavigate();
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const userCookie = Cookies.get('user');
      
        if (userCookie) {
          const userData = JSON.parse(userCookie);
          if (formData.name === userData.Name && formData.password === userData.Password) {
            alert('You are logged in');
            navigate('/videos');
          } else {
            alert('Enter valid username and password');
          }
        } else {
          alert('sign in first');
        }
      };
      
    
      const handleSignIn = () => {
        navigate('/signup');
      };
    
    
    
    
    
    
     
    return (
        <div>
             <h1 style={{ color:"red", marginLeft:"80px",paddingTop:"40px"}}>NETFLIX</h1>
             <button style={{ width: "80px", height: "40px", marginLeft: "1350px", marginTop: "-60px", background: "black", color: "white", position: "absolute" }} onClick={()=> navigate('/')}>Home</button>
             <button style={{ width: "80px", height: "40px", marginLeft: "1450px", marginTop: "-60px", background: "red", color: "white", position: "absolute" }} on onClick={()=>navigate("/signup")}>Signup</button>
               <div style={{ marginLeft: '600px', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '400px', paddingBottom: '20px', marginTop: '30px', borderBlockColor: 'red',background:"violet" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="Name"> user name</label>
          <input
            placeholder="Enter your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              border: '1px solid #ccc',
              '::placeholder': { color: 'black' }, // Default placeholder color
              ':hover::placeholder': { color: 'blue' }, // Placeholder color on hover
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter password"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              border: '1px solid #ccc',
              '::placeholder': { color: 'black' },
              ':hover::placeholder': { color: 'blue' },
            }}
          />
        </div>
        <div>
          <button type="submit" style={{ marginTop: '10px', marginRight: '10px' }}>
            Login
          </button>
          <button type="button" onClick={handleSignIn} style={{ marginTop: '10px', marginLeft: '200px', background: 'red', color: 'white' }}>
            Sign up
          </button>
        </div>
      </form>
    </div>
        </div>
        
     
    );
}

export default Login;
