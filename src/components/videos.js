import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Videos = () => {
    const navigate = useNavigate(); // initialize the navigate function

    const handleHomeClick = () => {
        navigate('/'); // navigate to the main page when the button is clicked
    };
    const handleLogout = () => {
        Cookies.remove('user'); // Remove the 'user' cookie
        navigate('/Signup'); // Navigate to the signup page
    };





 

    return (
        <div style={{ background:"black"}} >
             <h1 style={{ color:"red", marginLeft:"80px",paddingTop:"40px"}}>NETFLIX</h1>
             <button style={{ width: "80px", height: "40px", marginLeft: "1300px", marginTop: "-60px", background: "violet", color: "white", position: "absolute" }} onClick={handleHomeClick} >Home</button>
             <button style={{ width: "80px", height: "40px", marginLeft: "1430px", marginTop: "-60px", background: "Red", color: "white", position: "absolute" }} onClick={handleLogout} >Logout</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              
     <iframe 
                width="350" 
                height="315" 
                
                
                
                src="https://www.youtube.com/embed/DnZ8vY2nvw8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
                 style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                src="https://www.youtube.com/embed/Zd69FfhBmSc" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen  style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                src="https://www.youtube.com/embed/UXOMc8d3L8A" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen  style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                src="https://www.youtube.com/embed/A76db9lX2fE" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                src="https://www.youtube.com//embed/jCP72kluOmQ" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                
                
                src="https://www.youtube.com/embed/nuKv7X34L5I" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                
                
                src="https://www.youtube.com/embed/_L38HZEnrIA" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen style={{border:"2px solid red"}}>
            </iframe>
            <iframe 
                width="350" 
                height="315" 
                
                
                src="https://www.youtube.com/embed/rHvkTVG2qog" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen style={{border:"2px solid red"}}>
            </iframe>
        
        
      </div>
      </div>
        
    );
}

export default Videos;
