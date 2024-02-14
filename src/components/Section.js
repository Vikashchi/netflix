import React ,{ useState } from 'react'; 
import fig2 from './fig2.png'
import fig3 from './fig3.png'
import fig4 from './fig4.png'
import fig5 from './fig5.png'

const Section =() =>{
  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  


  const toggleAccordion1 = () => {
      setIsCollapsed1(!isCollapsed1);
  };

  const toggleAccordion2 = () => {
      setIsCollapsed2(!isCollapsed2);
  };
  const toggleAccordion3 = () => {
    setIsCollapsed3(!isCollapsed3);
};
const toggleAccordion4 = () => {
  setIsCollapsed4(!isCollapsed4);
};
    return (
        <div style={{background:"black", marginTop:"-40px",color:'white'}}>
           
            <section>
                <div>
                    <div>
                <h2 style={{marginLeft:"200px",fontSize:"50px"}}>Enjoy on your TV</h2>
                <p style={{marginLeft:"200px",fontSize:"30px",marginTop:"100px"}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, <br />Apple TV, Blu-ray players and more.</p>
                </div>
                <img src={fig2} alt="fig2"  style={{width:"600px",height:"600px", marginLeft:"900px",marginTop:"-200px"}} />
                </div>
                <div>
                    <div>
                    <img src={fig3} alt="fig3"  style={{width:"600px",height:"600px"}} />
                <h2 style={{marginLeft:"200px",fontSize:"50px", marginLeft:"900px",marginTop:"-500px"}}>Download your shows to watch offline</h2>
                <p style={{marginLeft:"200px",fontSize:"30px",marginTop:"100px", marginLeft:"900px"}}>Save your favourites easily and always have something to watch.</p>
                </div>
                
                </div>
                <div>
                    <div>
                <h2 style={{marginLeft:"200px",fontSize:"50px" ,marginTop:"300px"}}>Watch everywhere</h2>
                <p style={{marginLeft:"200px",fontSize:"30px",marginTop:"100px"}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <img src={fig4} alt="fig4"  style={{width:"600px",height:"600px", marginLeft:"900px",marginTop:"-350px"}} />
                </div>
                <div>
                    <div>
                    <img src={fig5} alt="fig5"  style={{width:"600px",height:"600px"}} />
                <h2 style={{marginLeft:"200px",fontSize:"50px", marginLeft:"700px",marginTop:"-500px"}}>Create profiles for kids</h2>
                <p style={{marginLeft:"200px",fontSize:"30px",marginTop:"100px", marginLeft:"700px"}}>Send children on adventures with their favourite <br />characters in a space made just for them—free with <br /> your membership.</p>
                </div>
                
                </div>
                <div>
  <h1 style={{ marginLeft: "400px", marginTop: "200px", fontSize: "60px" }}>Frequently Asked Questions</h1>
  <div className="accordion">
    <div className="accordion-header" onClick={toggleAccordion1} style={{width:"1200px", marginLeft:"150px"}}>
      <h2 style={{ border: '2px solid red', padding: '10px' }}>What is Netflix?</h2>
      <span className={isCollapsed1 ? 'icon-collapsed' : 'icon-expanded'}></span>
    </div>
    {!isCollapsed1 && (
      <div className="accordion-content" style={{width:"1200px", marginLeft:"150px"}}>
        <p style={{ border: '2px solid red', padding: '10px' }}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
      </div>
    )}

    {/* New Accordion Item */}
    <div className="accordion-header" onClick={toggleAccordion2}style={{width:"1200px", marginLeft:"150px"}}>
      <h2 style={{ border: '2px solid red', padding: '10px' }}>How can I sign up for Netflix?</h2>
      <span className={isCollapsed2 ? 'icon-collapsed' : 'icon-expanded'}></span>
    </div>
    {!isCollapsed2 && (
      <div className="accordion-content" style={{width:"1200px", marginLeft:"150px"}}>
        <p style={{ border: '2px solid red', padding: '10px' }}>To sign up for Netflix, you can visit our website or download our mobile app. Follow the instructions to create an account, choose a plan that works for you, and enter your payment details. Once you're signed up, you can start enjoying unlimited streaming of our vast library of content!</p>
      </div>
    )}
     <div className="accordion-header" onClick={toggleAccordion3}style={{width:"1200px", marginLeft:"150px"}}>
      <h2 style={{ border: '2px solid red', padding: '10px' }}>How much does Netflix cost?</h2>
      <span className={isCollapsed3 ? 'icon-collapsed' : 'icon-expanded'}></span>
    </div>
    {!isCollapsed3 && (
      <div className="accordion-content" style={{width:"1200px", marginLeft:"150px"}}>
        <p style={{ border: '2px solid red', padding: '10px' }}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming <br /> device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month.<br /> No extra costs, no contracts.</p>
      </div>
    )}
     <div className="accordion-header" onClick={toggleAccordion4}style={{width:"1200px", marginLeft:"150px"}}>
      <h2 style={{ border: '2px solid red', padding: '10px' }}>What can i Watch on Netflix?</h2>
      <span className={isCollapsed4 ? 'icon-collapsed' : 'icon-expanded'}></span>
    </div>
    {!isCollapsed4 && (
      <div className="accordion-content" style={{width:"1200px", marginLeft:"150px"}}>
        <p style={{ border: '2px solid red', padding: '10px' }}>Netflix has an extensive library of feature films, documentaries, TV shows,<br /> anime, award-winning Netflix originals, and more. Watch as much as you want,<br /> anytime you want.</p>
      </div>
    )}
  </div>
  <div style={{display:"flex"}}>
  <div style={{marginLeft:"200px"}}>
    <p>FAQ</p>
      <p>Account</p>
      <p>investor Relations</p>
      <p>Ways to Watch</p>
    
    
  
  </div>
  <div style={{marginLeft:"200px"}}>
  <p>privacy</p>
    <p>Corporate Information</p>
    <p>speed Test</p>
    <p>only on Netflix</p>
  </div>
  <div  style={{marginLeft:"200px"}}>
    <p>Media Center</p>
    <p>term of Use</p>
    <p>contact Us</p>
  </div>
  </div>
 </div>
        </section>
            
        </div>
          
    );
}

export default Section;
