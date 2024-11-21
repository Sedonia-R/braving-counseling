import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classes from "../styles/Groups.module.css";

export default function Groups() {

  const myStyle = {
    backgroundImage: "url(" +
    "https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg" + ")",
    backgroundSize: 'cover',
    alt: 'Photo by Scott Webb from Pexels',
  }

  return (
    <div>
      <Navbar />
      <div className={classes.groupsContainer} style={myStyle}>
        <h1 className={`${classes.pageTitle} ${classes.shadowsIntoLightRegular}`}><strong>Groups</strong></h1>
      </div>
      <div className={classes.groupDescription}>
        <p className={classes.robotoRegular}>I host periodic therapeutic groups for neurodiverse clients.</p>
        <p className={classes.robotoRegular}>These groups meet once a week for an average of __ weeks.</p>
        <p className={classes.robotoRegular}>Groups contain a maximum of __ participants.</p>
        <p className={classes.robotoRegular}>The cost is $___ to attend.</p>
        <div className={`${classes.upcoming} ${classes.robotoRegular}`}>
          <p className={`${classes.amaticScRegular} ${classes.upcomingGroups}`}><strong>Upcoming Groups</strong></p>
          <hr/>
          <p>Group Name, Dates...</p>
          <p>Group Name, Dates...</p>
          <p>...</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}