import React, {useCallback, useEffect} from 'react';
import Navbar from "../components/Navbar";
import classes from "../styles/Home.module.css";
import forestpic from "../images/forest-pic.jpg";
import homelogo from "../images/bc-logo-white.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import MobileSwiper from '../components/MobileSwiper';

export default function Home() {
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();

  // implementing swiping
  const handleSwipe = useCallback(({deltaX, deltaY}) => {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        navigate("/about")
      }
    } 
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <MobileSwiper onSwipe={handleSwipe}>
        <div className={classes.bkgrd} style={{backgroundImage: `url(${forestpic})`, alt: 'Photo by Felix Mittermeier from Pexels'}}></div>
        <div className={classes.container}>
          <div className={classes.col1}>
            <img className={classes.logo2} src={homelogo} alt="Braving Counseling Logo for Home Screen" />
          </div>
          <div className={classes.col2}>
            <div className={`${classes.welcome} ${classes.row} ${classes.shadowsIntoLightRegular}`}>
              <h1>Welcome to Braving Counseling with Vicki</h1>
            </div>
            <div className={`${classes.intro} ${classes.row} ${classes.handleeRegular}`}>
              <p>I'm Vicki Knox, a licensed clinical social worker (LCSW).</p>
              <p>I work with adults, teens, ADHD, Autism, and the LGBTQAI+ community.</p>
            </div>
          </div>
          <div className={classes.col3}>
            <img className={classes.picture} alt="Vicki Knox, LCSW" src="https://photos.psychologytoday.com/81960a85-eb1c-4c12-8ba8-80d048dc72ad/2/320x400.jpeg" />
          </div>
          <div className={classes.col4}></div>
        </div>
      </MobileSwiper>
      <Footer />
    </div>
  )
}