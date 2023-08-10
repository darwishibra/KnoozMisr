
import styles from './CTASection.module.css';
import Button from '../Button';

export default function CTASection() {
  return (
    <div className= {styles.CTASection} >
        <div className = {styles.heading}>
        Harvested with care, Delivered with quality!
        </div>
        <div className = {styles.subheading}>
        Our utmost priority is to insure the best flavour and maximum nutritional value of our products. Reach out and let us build a fruitful partnership together! 
        </div>
        <div className = {styles.button}>
            <Button text = "Contact Us" background-color = "#FFFFFF"/>
        </div>
    </div>
  )
}
