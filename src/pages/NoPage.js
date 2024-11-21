import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classes from "../styles/NoPage.module.css";

export default function NoPage() {

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className={classes.errorMessage}>Error 404: Not Found</h1>
      <p className={classes.errorGoHome}>Click on HOME above to navigate back to the home page</p>
      <Footer />
    </div>
  )
}