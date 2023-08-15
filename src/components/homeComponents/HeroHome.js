import styles from './HeroHome.module.css';
import heroImage from '../images/heroheading.png'
import Button from '../Button';
import mainSectionImage from '../images/mainSection.png'
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';



export default function HeroHome() {
  return (
    <div className = {styles.heroHome} >
        <div className = {styles.mainSection}>
          <div className = {styles.heading}>
            <div className = {styles.headingText}>YOUR SOURCE FOR PREMIUM PRODUCE</div>
            <img src = {heroImage} className = {styles.heroImage} alt = "hero image" />
          </div>
          <div className = {styles.subHeading}>We provide our partners with the highest quality products all year-round, from the most modern state-of-the-art processing plants.  </div>
          <div className = {styles.button}>
            <Button to = "/contactus" text = "Get in Touch" border = "none" backgroundColor = "#E79735" />
          </div>
          <img src = {mainSectionImage} alt = "main section image" className = {styles.mainSectionImage} />
        </div>
        <div className = {styles.sideBar}>
          <div className = {styles.media}>
            <img src = {image1} className = {styles.image1} alt = "sidebar image" />
            <img src = {image2} className = {styles.image2} alt = "sidebar image" />
            <img src = {image3} className = {styles.image3} alt = "sidebar image" />
            <img src = {image4} className = {styles.image4} alt = "sidebar image" />
          </div>
        </div>

    </div>
  )
}

