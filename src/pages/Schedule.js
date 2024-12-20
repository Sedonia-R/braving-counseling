import React, {useCallback, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Calendly from "../components/Calendly";
import classes from "../styles/Schedule.module.css";
import { useNavigate } from "react-router-dom";
import MobileSwiper from '../components/MobileSwiper';

export default function Login() {

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();

  // implementing swiping
  const handleSwipe = useCallback(({deltaX, deltaY}) => {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        navigate("/contact")
      } else {
        navigate("/FAQ")
      }
    } 
  }, [navigate]);

  const myStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/1353938/pexels-photo-1353938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg')",
    backgroundSize: 'cover',
    alt: 'Photo by Min An from Pexels',
  };

  return (
    <div>
      <Navbar />
      <MobileSwiper onSwipe={handleSwipe}>
        <div className={classes.scheduleContainer} style={myStyle}>
          <button 
            className={`${classes.shadowsIntoLightRegular} ${classes.groupsButton}`}
            onClick={() => navigate('../groups')}
          >See Groups</button>
          <div className={classes.or}>Or Schedule Individual Consultation ⬇️</div>
          <Calendly style={{padding: '1px'}}/>
          <div className={classes.spacer}></div>
        </div>
      </MobileSwiper>
      <Footer />
    </div>
  )
}