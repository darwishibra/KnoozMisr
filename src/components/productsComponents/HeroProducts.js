import HeroImage from '../images/HeroProducts.png';
import styles from './HeroProducts.module.css';

export default function HeroProducts() {
  return (
    <div className = {styles.heroProducts}>
        <div className = {styles.container}>
            <div className = {styles.heroText}>
              <div className = {styles.heading}>
                PRODUCT PORTFOLIO
              </div>
              <div className = {styles.subheading}>
              Showcasing a varied range of fruits and vegetables, carefully monitored by our production team for exceptional flavor and maximum nutritional value.
              </div>
            </div>
            <div className = {styles.image}>
              <img src = {HeroImage} alt = "Fruits and vegetables" />
            </div>
        </div>
        
    </div>
  )
}
