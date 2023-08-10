import styles from './SingleImageSection.module.css';
import image from '../images/ImageSection1.png';


export default function SingleImageSection() {
  return (
    <div className = {styles.section}>
        <div className = {styles.container}>
            <div className = {styles.image}>
                <img src = {image} alt = "image of man in farm" />
            </div>
            <div className = {styles.text}>
                <div className = {styles.heading}>
                    Who we are
                </div>
                <div className = {styles.paragraph}>
                KnoozMisr specializes in exporting fresh fruits and vegetables. Sourcing from Egypt, with its known moderate weather and rich soil. We supply our partners with competitive, indigenous and exotic products anytime with uncompromising quality.
                </div>
            </div>
        </div>
    </div>
  )
}
