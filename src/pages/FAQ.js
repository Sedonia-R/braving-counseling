import React, {useCallback, useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classes from "../styles/FAQ.module.css";
import faqs from "../images/faqs.jpg";
import { useNavigate } from "react-router-dom";
import MobileSwiper from '../components/MobileSwiper';

export default function FAQ() {
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  const navigate = useNavigate();

  // implementing swiping
  const handleSwipe = useCallback(({deltaX, deltaY}) => {
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        navigate("/schedule")
      } else {
        navigate("/resources")
      }
    } 
  }, [navigate]);
  
  const myStyle = {
    backgroundImage: `url(${faqs})`,
    backgroundSize: 'cover',
    alt: 'Photo by LIZ ROMO',
  };

  return (
    <div>
      <Navbar />
      <MobileSwiper onSwipe={handleSwipe}>
        <div className={classes.faqBackground} style={myStyle}>
          <div className={classes.faqContainer}>
            <h1 className={`${classes.pageTitle} ${classes.shadowsIntoLightRegular}`}><strong>Frequently Asked Questions (FAQ)</strong></h1>
            <div>
            <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check02" type="checkbox" name="menu" />  
                <label for="check02">How much do you charge?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>My standard rate is $175 per 50 minute session. I offer a reduced-rate sliding scale starting at $95 per session for those who cannot afford the standard rate.</li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check01" type="checkbox" name="menu" />  
                <label for="check01">Do you accept insurance?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>I accept Aetna, Citgna, Oxford, and Unired Health. For those without insurance, I offer a reduced-rate sliding scale ($95- $175) for sessions. I can provide a super bill for out of network benefits for possible reimbursement. Please contact me for more information.</li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check03" type="checkbox" name="menu" />  
                <label for="check03">You don't accept my insurance. Can I be reimbursed by my insurance company for my sessions?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>If you have Out-of-Network benefits, this guide will help you get the information you need to submit a reimbursement claim with your insurance company. The simplest way to get this information is to call your insurance company and ask the following questions:</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>1. Do I have Out-of-Network benefits?</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>*If they answer “no”, your insurance company will not provide reimbursement for your sessions.*</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>2. Do my Out-of-Network benefits cover outpatient mental health services?</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>3. My therapist uses the following CPT code, can you tell me if it is covered? CPT code: _____</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>4. Is prior authorization required? If so, write down the details.</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>5. Are telehealth sessions covered with my out-of-network benefits? CPT code: ____</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>6. Do I have a deductible? If so, how much?</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>7. How much does my plan cover?</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>8. How do I submit a claim?</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>9. Do I need to submit any specific forms with my superbill / medical receipt?</li>
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>10. How will I be reimbursed?</li>
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check10" type="checkbox" name="menu" />  
                <label for="check10">What is a Good Faith Estimate?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>- Under Section 2799B-6 of the Public Health Service Act, health care providers and health care facilities are required to inform individuals who are not enrolled in a plan or coverage or a Federal health care program, or not seeking to file a claim with their plan or coverage both orally and in writing of their ability, upon request or at the time of scheduling health care items and services, to receive a “Good Faith Estimate” of expected charges. You have the right to receive a “Good Faith Estimate” explaining how much your medical care will cost. Under the law, health care providers need to give patients who don’t have insurance or who are not using insurance an estimate of the bill for medical items and services. You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services. This includes related costs like medical tests, prescription drugs, equipment, and hospital fees. Make sure your health care provider gives you a Good Faith Estimate in writing at least 1 business day before your medical service or item. You can also ask your health care provider, and any other provider you choose, for a Good Faith Estimate before you schedule an item or service. If you receive a bill that is at least $400 more than your Good Faith Estimate, you can dispute the bill. Make sure to save a copy or picture of your Good Faith Estimate. For questions or more information about your right to a Good Faith Estimate, visit <a className={classes.link} href="https://cms.gov/nosurprises" target="_blank">www.cms.gov/nosurprises</a></li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check04" type="checkbox" name="menu" />  
                <label for="check04">Do you offer virtual sessions?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>Yes! I am happy to host our sessions over video if that is more convenient or comfortable for you.</li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check09" type="checkbox" name="menu" />  
                <label for="check09">What is a boutique therapy practice?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>A boutique therapy practice means that I operate at a much smaller scale than a large medical provider. This allows me to individualze your care to your specific needs. I keep a limited number of spots available in my schedule to allow for flexibility. If, for example, you experience a flare up or miss a session, we can likely reschedule you in the same week.</li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check05" type="checkbox" name="menu" />  
                <label for="check05">I prefer to meet in person. Is that an option?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>Absolutely! I offer in-person session in my office at 115 NE 7th Ave, Suit 103; Gainesville, FL 32601.</li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check06" type="checkbox" name="menu" />  
                <label for="check06">What can I expect from the free 15 minute consultation?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>The goal of the initial 15 minute consultation is to see if I would be a good fit for you as a therapist. I will give you a call at the time we decided and ask what brings you to therapy. You can share whatever feels important for me to know about you and ask any questions you have about me or the therapeutic process.</li>  
                  </ul>
              </div>
              <div className={`${classes.questionAndAnswer} ${classes.handleeRegular}`}>
                <input id="check07" type="checkbox" name="menu" />  
                <label for="check07">What can I expect from my first session?</label>  
                  <ul className={classes.submenu}>  
                      <li className={`${classes.answer} ${classes.robotoRegular}`}>During our first session together, I will spend time getting to know you and what brings you to therapy. We will discuss any goals, hopes, or expectations that you have for our time together, and what changes you would like to see in your life.</li>  
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </MobileSwiper>
      <Footer />
    </div>
  )
}