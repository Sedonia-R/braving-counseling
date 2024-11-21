import navlogo from "../images/bc-nav-logo.png";
import classes from "../styles/Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return(
    <div>
      <nav id="navbar" className={classes.navbar}>
      <div className={classes.logoLink} onClick={() => navigate('../')}><img src={navlogo} className={classes.logo} alt="Braving Counseling Logo for Navbar" /></div>
      <ul className={classes.list}>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/home')
          }}
        >
          Home
        </li>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/about')
          }}
        >
          About
        </li>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/services')
          }}
        >
          Services
        </li>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/resources')
          }}
        >
          Resources
        </li>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/faq')
          }}
        >
          FAQ
        </li>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/Schedule')
          }}
        >
          Schedule
        </li>
        <li 
          className={`${classes.amaticScRegular} ${classes.listItems}`}
          onClick={()=> {
            navigate('/contact')
          }}
        >
          Contact
        </li>
      </ul>
      </nav>
  </div>
  )
}