import React from 'react';
import fig1 from './fig1.png'
 
const Header = () => {
    return (
        <div style={{
            background: `url(${fig1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height:"700px"
            /* Add any other background properties here */
        }}>
            {/* Your component content goes here */}
            <h1 style={{ color:"red", marginLeft:"80px",paddingTop:"40px"}}>NETFLIX</h1>
            <div style={{marginLeft:"1250px",marginTop:"-70px"}}>
            <input
                    type="text"
                    placeholder="English"
                    style={{ width: "70px", height: "30px", padding: "5px" }}
                />
                <button style={{width:"80px",height:"40px" ,marginLeft:"40px",background:"red",color:"white"}}>signin</button>

            </div>
           <h1 style={{color:"white", marginTop:"200px",marginLeft:"320PX",fontSize:"50PX"}}>Unlimited movies, TV shows and more</h1>
           <p style={{color:"white",fontSize:"30px",marginLeft:"500px"}}>watch anyWhere. Cancle anytime.</p>
           <p style={{color:"white",fontSize:"30px",marginLeft:"300px"}}>Ready to watch? Enter youremail to create or restart your membership.</p>
           <div style={{marginLeft:"450px"}}>
           <input
                    type="text"
                    placeholder="Email address"
                    style={{ width: "300px", height: "50px", padding: "5px" }}
                />
                <button style={{width:"200px", height: "65px", marginLeft:"10px",background:"red",color:"white"}}>get Started > </button>
                </div>
                
        </div>
    );
}

export default Header;
