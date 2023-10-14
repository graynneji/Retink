import styles from "./hero.module.css";
import Button from "../button/button";
// import HeroImage from "../../assets/hero.png";
function Hero() {
  return (
    <>
      <div className={styles.HeroContainer}>
        <div className={styles.LeftHero}>
          <h1>Hey James</h1>
          <p>Lets create somethinng swesome today ...</p>

          <Button buttonType="start">Start Creating</Button>
        </div>
        {/* <div className={styles.DropContainer}> */}
        <select className={styles.Drop}>
          <option value="0">Zara ventures</option>
          <option value="1">Zara ventures</option>
          <option value="2">Zara ventures</option>
          <option value="3">Zara ventures</option>
        </select>
        <div className={styles.TextHero}>
          <p>You should have more engagement by 6pm today. try posting then</p>
          <p>Try our SEO optimization tool to increase engagement by 40%</p>
        </div>
      </div>
      {/* <img className={styles.ImageClass} src={HeroImage} alt="hero" /> */}
      {/* </div> */}
    </>
  );
}
export default Hero;
