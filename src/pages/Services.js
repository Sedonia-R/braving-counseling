import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import classes from "../styles/Services.module.css";
import safe from "../images/safe-space.png";
import plant from "../images/individual-background.jpg";
import Footer from "../components/Footer";
import plant2 from "../images/group-background.png";
import group from "../images/group.png";
import single from "../images/single.png";
import { useNavigate } from "react-router-dom";

export default function Services() {
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const individualBackground = {
    backgroundImage: `url(${plant})`,
    backgroundSize: 'cover',
    backgroundRepeat: `noRepeat`,
    marginTop: '0vh',
    alt: 'Photo by Scott Webb from Pexels',
  };
  const groupBackground = {
    backgroundImage: `url(${plant2})`,
    backgroundSize: 'cover',
    backgroundRepeat: `noRepeat`,
    marginTop: '0vh',
    alt: 'Photo by Element5 Digital',
  };

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className={classes.header} style={individualBackground}>
        <div className={`${classes.individual} ${classes.shadowsIntoLightRegular}`}>
          <h1>Individual Therapy</h1>
        </div>
        <img alt="All Are Welcome Logo with Pride Inclusive Rainbow Heart" className={classes.safeImg} src={safe} />
      </div>
      <div className={`${classes.topText} ${classes.robotoRegular }`}>
        <p><strong>Why?</strong> Therapy can help you heal from past experiences, improve your well-being, relieve distress, and develop new ways of thinking. My goal is to create a safe and affirming environment in which you can explore your life story and process your feelings without shame or fear of judgement.</p>
        <p><strong>When?</strong> I provide in-person and virtual sessions lasting 50 minutes each.</p>
        {/* <p>My philosophy includes an understanding and appreciation of intersectionality. I hold space for your whole self, including the ways that the various identities you hold shape your experience. I provide a safe space for individuals of all sexual orientations, gender identities, abilities, races, ethnicities, spiritual practices, etc.</p> */}
        <p><strong>How much?</strong> I offer a reduced-rate sliding scale ($95- $175) for individual therapy sessions and accept some insurance (Aetna, Citgna and Evernorth). Please
        <span
          className={classes.contactMe}
          onClick={()=> {
            navigate('/contact')
        }}> contact me
        </span> for more information. I can provide a super bill for out of network benefits for possible reimbursement.</p>
        <button
          onClick={()=> {
            navigate('/schedule')}}
        >
          Schedule a Free Consultation
        </button>
        <div className={classes.singlePicContainer}>
          <img className={classes.singlePic} alt="Individual succulent" src={single} />
        </div>
      </div>
      <div className={classes.subHeader} style={groupBackground}>
        <div className={`${classes.group} ${classes.shadowsIntoLightRegular}`}>
          <h1>Group Therapy</h1>
        </div>
        <div className={`${classes.bottomText} ${classes.robotoRegular }`}>
          <p>In addition to individual therapy, I offer periodic group sessions for neurodiverse clients. It can be helpful to know that you are not alone in your struggles. These groups provide a safe space for you to share your story with others who may be experiencing similar issues and who can provide support and encouragement on your therapeutic journey.</p>
          <button
            onClick={()=> {
              navigate('/groups')}}
          >
            See Upcoming Groups
          </button>
        </div>
        <img className={classes.groupPic} alt="A group of small succulents lined up in a row" src={group} />
      </div>
      
      <Footer />
    </div>
  )
}