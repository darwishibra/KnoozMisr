import styles from './BoxSection.module.css';
import imageLeft from '../images/imageLeft.png';
import imageRight from '../images/imageRight.png';
import visionImage from '../images/visionImage.png';
import missionImage from '../images/missionImage.png';

export default function BoxSection() {
  return (
    <div className = {styles.BoxSection}>

        <div className={styles.textRight}>

            <div className = {styles.imageLeft}>
                <img src= {imageLeft} alt = "image on the left side"/>
            </div>

            <div className = {styles.vision}>
                <div className = {styles.visionTitle}>
                    <div className= {styles.visionText}>VISION</div>
                    <div className = {styles.visionImage}>
                        <img src = {visionImage} alt = "eye icon"/>
                    </div>
                </div>
                <div className = {styles.visionSubheading}>
                To become one of the top globally impacting food companies enriching consumers’ lives with healthy, high quality, and innovative quality.
                </div>
            </div>
        </div>
        <div className = {styles.textLeft}>

            <div className = {styles.imageRight}>
                <img src = {imageRight} alt = "image on the right side"/>
            </div>

            <div className = {styles.mission}>
                
                <div className = {styles.missionTitle}>
                    <div className= {styles.missionText}>MISSION</div>
                    <div className = {styles.missionImage}>
                        <img src = {missionImage} alt = "accuracy icon"/>
                    </div>
                </div>
                <div className = {styles.missionSubheading}>
                To improve the lifestyle of consumers by unlocking the potential of nature and delivering the best quality food from the soil to the plate.
                </div>
            </div>
        </div>
    </div>
  )
}
