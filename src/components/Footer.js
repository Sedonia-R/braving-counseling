import logo from "../images/bc-logo-white.png";
import safe from "../images/safe-space.png";
import classes from "../styles/Footer.module.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();

  return(
    <div>
      <div className={classes.footer}>
        <div className={classes.col1} onClick={() => navigate('../')}>
          <img alt="Braving Counseling Logo" src={logo}/>
        </div>
        <div className={classes.col2}>
          <p className={classes.footerTitle}>Braving Counseling with Vicki, LLC</p>
          <p className={`${classes.address}`}>115 NE 7th Ave, Suite 103; Gainesville, FL 32601</p>
          <p className={`${classes.email} ${classes.handleeRegular}`}><i className="fa-regular fa-envelope" /> <a className="email" href="mailto:vsknoxmsw@gmail.com">vsknoxmsw@gmail.com</a></p>
          <p className={`${classes.phone} ${classes.handleeRegular}`}><i className="fa-solid fa-mobile-screen" /> (352) 290-2038</p>
        </div>
        <div className={classes.col3}>
          <img alt="All Are Welcome Here Inclusive Pride Heart Logo" src={safe}/>
        </div>
      </div>
    </div>
  )
}