import styles from './ExportSection.module.css';
import image from '../images/Map.png';

export default function ExportSection() {
  return (
    <div className = {styles.exportSection}>
        <div className = {styles.heading}>
            EXPORT
        </div>

        <div className = {styles.text}>
            ASIA - AFRICA - EUROPE - OCEANIA - NORTH AMERICA - LATIN AMERICA
        </div>

        <div className = {styles.imageContainer}>
            <img src = {image} alt = "World Map" className = {styles.image} />
        </div>
    </div>
  )
}