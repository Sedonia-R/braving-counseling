import React, {useCallback, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classes from "../styles/About.module.css";
import { useNavigate } from "react-router-dom";
import MobileSwiper from '../components/MobileSwiper';

export default function About() {

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  const navigate = useNavigate();

  // implementing swiping
  const handleSwipe = useCallback(({deltaX, deltaY}) => {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        navigate("/services")
      } else {
        navigate("/home")
      }
    } 
  }, [navigate]);

  const myStyle = {
    backgroundImage: "url('https://images.pexels.com/photos/72509/pexels-photo-72509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg')",
    backgroundSize: 'cover',
    alt: 'Photo by Michael Heinrich from Pexels',
  };

  return (
    <div>
      <Navbar/>
      <MobileSwiper onSwipe={handleSwipe}>
        <div className={classes.introBanner} style={myStyle}>
          <div className={classes.about}>
            <h1 className={`${classes.shadowsIntoLightRegular} ${classes.pageTitle}`}><strong>About Me</strong></h1>
          </div>
          <div className={classes.topIntroWithPic}>
            <div className={classes.col1}>
              <h2 className={`${classes.row1} ${classes.playwriteIsItalics}`}>Hi, I'm Vicki (she/her)</h2>
              <div className={classes.row2}>
                <p className={classes.robotoRegular}>I'm a licensed clinical social worker (LCWS) and therapist who is passionate about conscious parenting, neurodivergence, and women's issues. I hope to create a safe and healing space for you to share your story, whatever it may be.</p>
                <p className={`${classes.robotoRegular} ${classes.secondLine}`}>Together we can tap into your strengths to work through trauma, difficult relationships, and challenges in your life.</p>
              </div>
              <div className={classes.row3}>
                <button
                  onClick={() => 
                    navigate('../schedule')
                  }
                >
                  Schedule a Free Consultation
                </button>
              </div>
            </div>
            <div className={classes.col2}>
              <img className={classes.picture} alt="Vicki Knox, LCSW" src="https://photos.psychologytoday.com/81960a85-eb1c-4c12-8ba8-80d048dc72ad/2/320x400.jpeg" />
            </div>
          </div>
        </div>
        <div className={classes.aboutPractice}>
          <h1 className={`${classes.shadowsIntoLightRegular} ${classes.pageTitle}`}><strong>My Philosophy</strong></h1>
        </div>   
        <div>
          <div className={classes.intro}>
            <p className={`${classes.introText} ${classes.handleeRegular}`}>
              Whatever your story may be, I believe that being seen and heard fully is an intricate part of the healing process. I utilize a client-centered and trauma-informed framework to encourage growth and self-acceptance.
            </p>
            <div className={classes.quoteContainer}>   
              <h2 className={`${classes.quote} ${classes.architectsDaughterRegular}`}>“There is no greater agony than bearing an untold story inside you.”</h2>
              <h3 className={`${classes.author} ${classes.playwriteIsItalics}`}><strong>- Maya Angelou</strong></h3>
            </div>
            <p className={`${classes.introText} ${classes.handleeRegular}`}>
              I work with adults, teens, ADHD, Autism, and the LGBTQAI+ community. Creating and sustaining connection, radical self-acceptance, and mindfulness will be key in our work together.
            </p>
            <p className={`${classes.introText} ${classes.endText} ${classes.handleeRegular}`}>
              We all have stories to share and things we strive to improve in our lives. I would be honored to work alongside you on your journey to your truest self.
            </p>
          </div>
        </div>
      </MobileSwiper>
      <Footer />
    </div>
  )
}