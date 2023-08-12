import styles from './QualitySection.module.css';
import image from '../images/Quality.png';

export default function QualitySection() {
  return (
    <div className = {styles.qualitySection}>
        <div className = {styles.container}>
            <div className = {styles.text}>
                <div className = {styles.title}>QUALITY CONTROL</div>
                <div className = {styles.heading}>
                    ...IN THE FIELD
                </div>
                <div className = {styles.paragraph}>
                After the selection of the right varieties and seeds,our in-house cultivation department is in charge for the entire follow-up of the growth & safety of the crops i t includes the use of fertilizers and pesticides which are our utmost priority.
                </div>

                <div className = {styles.heading}>
                    ...IN TRACEABLITY
                </div>
                <div className = {styles.paragraph}>
                The perfect traceability system are in use, to make it possible to map the entire production from planning to harvest to packing ,we have the ability to know the cultivation history fromour packed product.
                </div>

                <div className = {styles.heading}>
                    ...IN PRODUCTION
                </div>
                <div className = {styles.paragraph}>
                After harvest, processing is done using the highest techniques to insure best flavorand maximum nutritional value. For this reason we have the most qualified production team to insure that our targets are met. 
                </div>
            </div>
            <div className = {styles.imageContainer}>
                <img src = {image} alt = "Quality" className = {styles.image} />
            </div>
        </div>
    </div>
  )
}