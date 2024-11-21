import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import classes from "../styles/Resources.module.css";
import background from "../images/resources.jpg";

export default function Resources() {

  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    alt: 'Photo by FWStudio from Pexels',
  };

  return (
    <div>
      <Navbar />
      <div className={classes.resources} style={myStyle}>
        <div className={classes.header}>
          <h1 className={`${classes.shadowsIntoLightRegular} ${classes.title}`}><strong>Resources</strong></h1>
        </div>
        <div className={classes.content}>
          <div className={classes.subHeader}>
            <p className={classes.robotoRegular}>These resources are trusted references that may offer support for your mental health and wellbeing. Please note that these resources are not to be considered direct treament and are not a substitute for therapy.</p>
          </div>
          <div className={classes.list}>
            <p className={`${classes.nanumMyeongjoRegular} ${classes.listHeader}`}>24/7 Free Crisis Services</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Alachua County Crisis Hotline: (352) 264-6789</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>National Suicide Hotline: 1-800-784-2433</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>National Suicide Prevention Lifeline: 1-800-273-8255</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>The Trevor Project for <span className={classes.rainbow}><span className={classes.red}>L</span><span className={classes.orange}>G</span><span className={classes.yellow}>B</span><span className={classes.green}>T</span><span className={classes.blue}>Q</span><span className={classes.indigo}>I</span><span className={classes.violet}>A</span><span className={classes.plus}>+</span></span> young people <p className= {`${classes.trevor} ${classes.robotoRegular} ${classes.listItem}`}><strong>Text:</strong> START to 678-678</p>
              <p className={`${classes.robotoRegular} ${classes.listItem}`}><strong>Hotline:</strong> 1-866-488-7386</p>
              <p className={`${classes.robotoRegular} ${classes.listItem}`}><strong>Chat online:</strong> <a className={classes.link} href="www.thetrevorproject.org/webchat">www.thetrevorproject.org/webchat</a></p></li>
            </ul>
            <hr />
            <p className={`${classes.nanumMyeongjoRegular} ${classes.listHeader}`}>Somatic (Body) Movement</p>
            <ul>
              <li className={classes.robotoRegular}><a className={classes.link} target="_blank" rel="noreferrer" href="https://theworkoutwitch.com/">The Workout Witch</a></li>
              <li className={classes.robotoRegular}>...</li>
            </ul>
            <hr />
            <p className={`${classes.nanumMyeongjoRegular} ${classes.listHeader}`}>Meditations</p>
            <ul>
              <li className={classes.robotoRegular}><a className={classes.link} target="_blank" rel="noreferrer" href="https://youtu.be/-aBP53BcSj8?feature=shared/">Positive Affirmations for Personal Growth</a></li>
              <li className={classes.robotoRegular}>...</li>
            </ul>
            <hr />
            <p className={`${classes.nanumMyeongjoRegular} ${classes.listHeader}`}>Groups & Organizations</p>
            <ul>
              <li className={classes.robotoRegular}><a className={classes.link} target="_blank" rel="noreferrer" href="https://gainesvillepride.org/">Pride Community Center of North Central Florida (PCCNCF)</a></li>
              <li className={classes.robotoRegular}><a className={classes.link} target="_blank" rel="noreferrer" href="https://www.thetrevorproject.org/">The Trevor Project</a></li>
              <li className={classes.robotoRegular}><a className={classes.link} target="_blank" rel="noreferrer" href="https://namigainesville.org/">NAMI Gainesville</a></li>
              <li className={classes.robotoRegular}>...</li>
            </ul>
            <hr />
            <p className={`${classes.nanumMyeongjoRegular} ${classes.listHeader}`}>Book Recommendations</p>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>Trauma</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>The Body Keeps the Score by: Bessel Van Der Kolk</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Adult Children of Emotionally Immature Parents by: Lindsay Gibson</li>
            </ul>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>Relationships</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Codependent No More by: Melody Beattie</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Why Does He Do That? by: Lundy Bancroft</li>
            </ul>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>Neurodivergence</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Insert Title & Author Here</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>...</li>
            </ul>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>Parenting</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Insert Title & Author Here</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>...</li>
            </ul>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>LGBTQIA+</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Insert Title & Author Here</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>...</li>
            </ul>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>Mindfulness</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Insert Title & Author Here</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>...</li>
            </ul>
            <p className={`${classes.bookSubjects} ${classes.amaticScRegular}`}>Other</p>
            <ul>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>Insert Title & Author Here</li>
              <li className={`${classes.robotoRegular} ${classes.listItem}`}>...</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}