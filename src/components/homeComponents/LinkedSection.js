import styles from './LinkedSection.module.css';
import image from '../images/LinkedSection.png';
import Button from '../Button';

export default function LinkedSection() {
  return (
    <div className = {styles.linkedSection}>
        <div className= {styles.container}>

            <div className = {styles.title}>
                <div className={styles.titleText}>
                    WE ARE SELLING <span className={styles.orangeText}>QUALITY</span>, NOT <span className = {styles.greenText}>PRODUCTS</span>
                </div>
                <hr className= {styles.line} />
            </div>
            <div className = {styles.imageAndText}>
                <div className = {styles.textAndButton}>
                    <div className = {styles.subheading}>Our products portfolio is fully dedicated to the export markets adhering to all regional and global quality standards and specifics.</div> 
                    <Button to = "/products" text = "Products" backgroundcolor = "white" />
                </div>
                <div className = {styles.image}>
                    <img src = {image} alt = "Varity of fruits and vegetables" />
                </div>
            </div>
        </div>
    </div>
  )
}
