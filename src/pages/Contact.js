import React, {useCallback, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classes from "../styles/Contact.module.css";
import { useNavigate } from "react-router-dom";
import MobileSwiper from '../components/MobileSwiper';

export default function Contact() {

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate =  useNavigate();

    // implementing swiping
    const handleSwipe = useCallback(({deltaX, deltaY}) => {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          navigate("/schedule")
        }
      } 
    }, [navigate]);

  const myStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/1687341/pexels-photo-1687341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg')",
    backgroundSize: 'cover',
    alt: 'Photo by Igor Haritanovich from Pexels',
  }

  return (
    <div>
      <Navbar />
      <MobileSwiper onSwipe={handleSwipe}>
        <div className={classes.contactContainer} style={myStyle}>
          <h1 className={`${classes.pageTitle} ${classes.shadowsIntoLightRegular}`}><strong>Contact Me</strong></h1>
          <p>If you have any questions or are ready to take the next step, please reach out!</p>
          <hr/>
          <p className={`${classes.amaticScBold} ${classes.questions}`}>Questions?</p>
          <div className={classes.contactDeets}>
            <p className={classes.robotoRegular}><strong>Email is best:</strong></p>
            <p className={classes.handleeRegular}>
              <a className="email" href="mailto:vsknoxmsw@gmail.com">vsknoxmsw@gmail.com</a>
            </p>
            <p className={classes.robotoRegular}><strong>Or text:</strong></p>
            <p className={classes.handleeRegular}>(352) 290-2038</p>
          </div>
          <hr/>
          <p className={`${classes.amaticScBold} ${classes.questions}`}>Ready for the Next Step?</p>
          <div className={classes.buttonDiv}>
            <button 
              className={classes.consultation}
              onClick={() => navigate('../schedule')}
            >
              Schedule 15 Minute Consultation
            </button>
          </div>
          <hr/>
          <p className={`${classes.amaticScBold} ${classes.questions} ${classes.space}`}>My Office:</p>
          <p className={`${classes.robotoRegular} ${classes.address}`}>115 NE 7th Ave, Suite 103</p>
          <p className={`${classes.robotoRegular} ${classes.address}`}>Gainesville, FL 32601</p>
        </div>
      </MobileSwiper>
      <Footer />
    </div>
  )
}